// const util = require('util');
// const exec = util.promisify(require('child_process').exec);
// const fs = require('fs');
// const path = require('path');
// const { MongoClient, GridFSBucket } = require('mongodb');

import { promisify } from 'util';
import { exec as execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { MongoClient, GridFSBucket } from 'mongodb';

/**
 * @class
 * Move from MongoDB on capstone server to local computer
 */
class AddToDirectory {
    /**
     * Constructor
     * @param url MongoDB connection URL
     * @param dbName Database name
     * @param localDirectory Local directory path
     */
    constructor(url, dbName, localDirectory) {
        this.url = url;
        this.dbName = dbName;
        this.localDirectory = localDirectory;
    }

    /**
     * Connect to MongoDB
     * @returns {Promise<*>}
     * @constructor
     */
    async ConnectToDatabase() {
        const client = new MongoClient(this.url);
        try {
            await client.connect();
            console.log('connected to MongoDB');
            return client.db(this.dbName);
        } catch (err) {
            console.error('error connecting to MongoDB', err);
            throw err;
        }
    }

    /**
     * Download files from MongoDB and save them to the local directory
     * @returns {Promise<void>}
     * @constructor
     */
    async DownloadFiles() {
        const db = await this.ConnectToDatabase();
        try {
            const bucket = new GridFSBucket(db);
            const filesCursor = bucket.find();
            const fileList = await filesCursor.toArray();

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
                        console.log(`file "${fileName}" downloaded and saved to "${outputFilePath}"`);
                        resolve();
                    });
                    fileStream.on('error', (err) => {
                        console.error(`error saving file "${fileName}" to "${outputFilePath}":`, err);
                        reject(err);
                    });
                }));
            }

            await Promise.all(downloadAndTransferPromises);
            console.log('all files downloaded and saved to local directory');
        } catch (err) {
            console.error('error downloading and transferring files', err);
        } finally {
            await db.client.close();
            process.exit();
        }
    }
}

const url = 'mongodb://root:password@35.9.22.105:27017';
const dbName = 'local';
const localDirectory = '../src/assets/factory_floor_plan';

const addToDirectory = new AddToDirectory(url, dbName, localDirectory);
addToDirectory.DownloadFiles();

// module.exports = {AddToDirectory:AddToDirectory};
export default AddToDirectory;