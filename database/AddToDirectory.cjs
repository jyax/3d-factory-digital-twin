const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs');
const path = require('path');
const { MongoClient, GridFSBucket } = require('mongodb');

// import { promisify } from 'util';
// import { exec as execSync } from 'child_process';
// import fs from 'fs';
// import path from 'path';
// import { MongoClient, GridFSBucket } from 'mongodb';

/**
 * @class
 * Move from MongoDB to local computer
 */
class AddToDirectory {
    /**
     * Constructor
     * @param {string} url - MongoDB connection URL
     * @param {string} dbName - Database name
     * @param {string} localDirectory - Local directory path for file storage
     */
    constructor(url, dbName, localDirectory) {
        this.url = url;
        this.dbName = dbName;
        this.localDirectory = localDirectory;
    }

    /**
     * Connect to MongoDB
     * @returns {Promise<Db>} - A promise that resolves to the MongoDB database object
     */
    async ConnectToDatabase() {
        const client = new MongoClient(this.url);
        try {
            await client.connect();
            console.log('Connected to MongoDB');
            return client.db(this.dbName);
        } catch (err) {
            console.error('Error connecting to MongoDB', err);
            throw err;
        }
    }

    /**
     * Download files from MongoDB and save them to the local directory
     * @returns {Promise<void>} - A promise that resolves when all files are downloaded and saved
     */
    async DownloadFiles() {
        const db = await this.ConnectToDatabase();
        try {
            console.log('MongoDB connection established');

            const bucket = new GridFSBucket(db);
            const filesCursor = bucket.find();
            const fileList = await filesCursor.toArray();
            //console.log('File list:', fileList);

            const downloadAndTransferPromises = [];
            for (const file of fileList) {
                let fileName = file.filename;
                if (!fileName.endsWith('.glb')) {
                    fileName += '.glb';
                }
                const outputFilePath = path.join(this.localDirectory, fileName);

                downloadAndTransferPromises.push(new Promise((resolve, reject) => {
                    const downloadStream = bucket.openDownloadStream(file._id);
                    const fileStream = fs.createWriteStream(outputFilePath);
                    downloadStream.pipe(fileStream);
                    fileStream.on('finish', () => {
                        console.log(`File "${fileName}" downloaded and saved to "${outputFilePath}"`);
                        resolve();
                    });
                    fileStream.on('error', (err) => {
                        console.error(`Error saving file "${fileName}" to "${outputFilePath}":`, err);
                        reject(err);
                    });
                }));
            }

            await Promise.all(downloadAndTransferPromises);
            console.log('All files downloaded and saved to local directory successfully');
        } catch (err) {
            console.error('Error downloading and transferring files', err);
        } finally {
            await db.client.close();
            process.exit();
        }
    }
}

const url = 'mongodb://root:password@localhost:27017';
const dbName = 'local';
const localDirectory = './src/assets/glb_models';

const addToDirectory = new AddToDirectory(url, dbName, localDirectory);
addToDirectory.DownloadFiles();

//export default AddToDirectory;
module.exports = {AddToDirectory:AddToDirectory};