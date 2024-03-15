const { MongoClient, GridFSBucket } = require('mongodb');
const fs = require('fs');
const path = require('path');

// import { MongoClient, GridFSBucket } from 'mongodb';
// import fs from 'fs';
// import path from 'path';

/**
 * @class
 * Upload files from local computer to MongoDB
 */
class AddToMongoDBServer {
    constructor(url, dbName, modelPath) {
        this.url = url;
        this.dbName = dbName;
        this.modelPath = modelPath;
    }

    /**
     * Connect to MongoDB
     * @returns {Promise<void>}
     * @constructor
     */
    async ConnectToDatabase() {
        this.client = new MongoClient(this.url);
        try {
            await this.client.connect();
            console.log('connected to MongoDB');
        } catch (err) {
            console.error('error connecting to MongoDB', err);
            throw err;
        }
    }

    /**
     * Upload a file from local computer to MongoDB on capstone server
     * @param filePath Path of file to upload
     * @param fileName Name of file to upload
     * @returns {Promise<unknown>}
     * @constructor
     */
    async UploadFile(filePath, fileName) {
        const db = this.client.db(this.dbName);
        const bucket = new GridFSBucket(db);

        const metadata = {
            contentType: 'model/gltf-binary',
            filename: `${fileName}.glb`,
            filePath: filePath
        };

        const fileStream = fs.createReadStream(filePath);
        const stats = fs.statSync(filePath);

        if (stats.size === 0) {
            console.error(`file "${fileName}" is empty, skipping upload`);
            return;
        }

        const uploadStream = bucket.openUploadStream(`${fileName}.glb`, { metadata });

        return new Promise((resolve, reject) => {
            fileStream.pipe(uploadStream);
            uploadStream.on('error', err => {
                console.error(`error uploading file "${fileName}":`, err);
                reject(err);
            });
            uploadStream.on('finish', () => {
                console.log(`file "${fileName}" uploaded successfully`);
                resolve();
            });
        });
    }

    /**
     * Upload all GLB files from local computer to MongoDB on capstone server
     * @returns {Promise<void>}
     */
    async UploadGLBFiles() {
        try {
            console.log('starting file upload process');
            const files = fs.readdirSync(this.modelPath);
            const glbFiles = files.filter(file => path.extname(file).toLowerCase() === '.glb');

            console.log(`found ${glbFiles.length} .glb files to upload`);

            for (const glbFile of glbFiles) {
                const filePath = path.join(this.modelPath, glbFile);
                const fileName = path.basename(glbFile, path.extname(glbFile));

                if (path.extname(glbFile).toLowerCase() !== '.glb') {
                    console.error(`file "${fileName}" does not have a .glb extension, skipping upload`);
                    continue;
                }

                console.log(`processing file: ${fileName}.glb`);

                try {
                    console.log(`uploading file: ${fileName}.glb`);
                    await this.UploadFile(filePath, fileName);
                    console.log(`file upload completed: ${fileName}.glb`);
                } catch (error) {
                    console.error(`error uploading file "${fileName}.glb":`, error);
                }
            }

            console.log('file upload process completed');
        } catch (err) {
            console.error('error during file upload process:', err);
        } finally {
            console.log('closing MongoDB connection');
            await this.client.close();
            console.log('MongoDB connection closed');
        }
    }

    async run() {
        await this.ConnectToDatabase();
        await this.UploadGLBFiles();
    }
}

// use username and password from docker compose and MongoDB port
const url = 'mongodb://root:password@35.9.22.105:27017';
// use name of database
const dbName = 'local';
// path of models
const modelPath = './src/assets/glb_models';

const addToMongoDBServer = new AddToMongoDBServer(url, dbName, modelPath);
addToMongoDBServer.run();

//export default AddToMongoDB;
module.exports = {AddToMongoDBServer:AddToMongoDBServer};