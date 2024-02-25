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
const remoteHost = '35.9.22.105';
const remotePort = 22;
const remoteUsername = 'magna_user';
const remoteDirectory = './shared_files'; // Update with desired remote directory

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
 * download files to local computer and transfer to remote server
 * @returns {Promise<void>}
 * @constructor
 */
async function DownloadAndTransferFiles() {
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

            const command = `scp -P ${remotePort} "${outputFilePath}" ${remoteUsername}@${remoteHost}:${remoteDirectory}/`;

            const transferPromise = new Promise((resolve, reject) => {
                exec(command)
                    .then(() => {
                        console.log(`File "${fileName}" transferred successfully`);
                        resolve();
                    })
                    .catch((err) => {
                        console.error(`Error transferring file "${fileName}"`, err);
                        reject(err);
                    });
            });
            downloadAndTransferPromises.push(transferPromise);
        }

        await Promise.all(downloadAndTransferPromises);
        console.log('All files downloaded and transferred successfully');
    } catch (err) {
        console.error('Error downloading and transferring files', err);
    } finally {
        await db.client.close();
    }
}

DownloadAndTransferFiles();