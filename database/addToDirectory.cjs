/**
 * add to directory using mongodb
 */
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs');
const path = require('path');
const { MongoClient, GridFSBucket } = require('mongodb');

const uri = 'mongodb+srv://alanfeng6:magnaspring24@magna-cluster.xht2nlr.mongodb.net/';
const dbName = 'Magna-db';
const localDirectory = '../glb_models_2';

/**
 * connect to mongodb
 * @returns {Promise<Db>}
 * @constructor
 */
async function ConnectToDatabase() {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        return client.db(dbName);
    } catch (err) {
        console.error('Error connecting to MongoDB', err);
        throw err;
    }
}

/**
 * download files to local computer
 * @returns {Promise<void>}
 * @constructor
 */
async function DownloadFiles() {
    const db = await ConnectToDatabase();
    try {
        console.log('MongoDB connection established');

        const bucket = new GridFSBucket(db);
        const filesCursor = bucket.find();

        const fileList = await filesCursor.toArray();
        console.log('File list:', fileList);

        const downloadAndTransferPromises = [];
        for (const file of fileList) {
            let fileName = file.filename;
            // Check if the file name already contains the .glb extension
            if (!fileName.endsWith('.glb')) {
                fileName += '.glb'; // Append the .glb extension if it's missing
            }
            const outputFilePath = path.join(localDirectory, fileName);

            // Download the file from GridFS and write it to the local directory
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
    }
}

DownloadFiles();