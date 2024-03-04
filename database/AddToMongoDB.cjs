const { MongoClient, GridFSBucket } = require('mongodb');
const fs = require('fs');
const path = require('path');

// import { MongoClient, GridFSBucket } from 'mongodb';
// import fs from 'fs';
// import path from 'path';

/**
 * @class
 * Upload files to MongoDB from local computer
 */
class AddToMongoDB {
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
            console.log('Connected to MongoDB');
        } catch (err) {
            console.error('Error connecting to MongoDB', err);
            throw err;
        }
    }

    /**
     * Upload a file to MongoDB from local computer
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
            filename: `${fileName}.glb`
        };

        const fileStream = fs.createReadStream(filePath);
        const stats = fs.statSync(filePath);

        if (stats.size === 0) {
            console.error(`File "${fileName}" is empty. Skipping upload.`);
            return;
        }

        const uploadStream = bucket.openUploadStream(`${fileName}.glb`, { metadata });

        return new Promise((resolve, reject) => {
            fileStream.pipe(uploadStream);
            uploadStream.on('error', err => {
                console.error(`Error uploading file "${fileName}":`, err);
                reject(err);
            });
            uploadStream.on('finish', () => {
                console.log(`File "${fileName}" uploaded successfully`);
                resolve();
            });
        });
    }

    /**
     * Upload all GLB files to MongoDB from local computer
     * @returns {Promise<void>}
     * @constructor
     */
    async UploadGLBFiles() {
        try {
            console.log('Starting file upload process...');
            const files = fs.readdirSync(this.modelPath);
            const glbFiles = files.filter(file => path.extname(file).toLowerCase() === '.glb');

            console.log(`Found ${glbFiles.length} .glb files to upload.`);

            for (const glbFile of glbFiles) {
                const filePath = path.join(this.modelPath, glbFile);
                const fileName = path.basename(glbFile, path.extname(glbFile));

                if (path.extname(glbFile).toLowerCase() !== '.glb') {
                    console.error(`File "${fileName}" does not have a .glb extension. Skipping upload.`);
                    continue;
                }

                console.log(`Processing file: ${fileName}.glb`);

                try {
                    console.log(`Uploading file: ${fileName}.glb`);
                    await this.UploadFile(filePath, fileName);
                    console.log(`File upload completed: ${fileName}.glb`);
                } catch (error) {
                    console.error(`Error uploading file "${fileName}.glb":`, error);
                }
            }

            console.log('File upload process completed.');
        } catch (err) {
            console.error('Error during file upload process:', err);
        } finally {
            console.log('Closing MongoDB connection...');
            await this.client.close();
            console.log('MongoDB connection closed.');
        }
    }

    async run() {
        await this.ConnectToDatabase();
        await this.UploadGLBFiles();
    }
}

// use username and password from docker compose and MongoDB port
const url = 'mongodb://root:password@localhost:27017';
// use name of database
const dbName = 'local';
// path of models
const modelPath = '../glb_models';

const addToMongoDB = new AddToMongoDB(url, dbName, modelPath);
addToMongoDB.run();

//export default AddToMongoDB;