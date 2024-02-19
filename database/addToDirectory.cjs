/**
 * add to directory using mongodb
 */
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs');
const path = require('path');
const { MongoClient, GridFSBucket } = require('mongodb');

const uri = 'mongodb://localhost:27017/';
const dbName = 'test';
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

        const downloadAndConvertPromises = [];
        for (const file of fileList) {
            const fileName = file.filename;
            const outputFilePath = path.join(localDirectory, fileName);

            const downloadPromise = new Promise((resolve, reject) => {
                const downloadStream = bucket.openDownloadStream(file._id);
                const fileStream = fs.createWriteStream(outputFilePath);
                downloadStream.pipe(fileStream);
                downloadStream.on('error', reject);
                downloadStream.on('end', resolve);
            });
            downloadAndConvertPromises.push(downloadPromise);
        }

        await Promise.all(downloadAndConvertPromises);
        console.log('All files downloaded and converted successfully');
    } catch (err) {
        console.error('Error downloading and converting files', err);
    } finally {
        await db.client.close();
    }
}

DownloadFiles();