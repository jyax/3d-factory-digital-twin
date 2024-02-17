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
const localDirectory = '../glb_models';

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

async function ConvertToGLB(inputFilePath, outputFilePath) {
    const { stdout, stderr } = await exec(`obj2gltf -i ${inputFilePath} -o ${outputFilePath}`);
    if (stderr) {
        throw new Error(stderr);
    }
    console.log(stdout);
}

async function DownloadAndConvertFiles() {
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
            const inputFilePath = path.join(localDirectory, fileName);
            const outputFileName = fileName.replace(/\.[^/.]+$/, ".glb");
            const outputFilePath = path.join(localDirectory, outputFileName);
            const downloadPromise = new Promise((resolve, reject) => {
                const downloadStream = bucket.openDownloadStream(file._id);
                const fileStream = fs.createWriteStream(inputFilePath);
                downloadStream.pipe(fileStream);
                downloadStream.on('error', reject);
                downloadStream.on('end', () => {
                    // Check if the file exists and has data before attempting conversion
                    fs.readFile(inputFilePath, 'utf8', (err, data) => {
                        if (err) {
                            console.error(`Error accessing file "${fileName}":`, err);
                            resolve(); // Resolve promise without attempting conversion
                        } else {
                            // Check if the file contains expected geometry data
                            if (data.includes('"primitives":') && data.includes('"vertices":')) {
                                ConvertToGLB(`"${inputFilePath}"`, `"${outputFilePath}"`) // Add double quotes around file paths
                                    .then(resolve)
                                    .catch(reject);
                            } else {
                                console.error(`File "${fileName}" does not contain valid geometry data`);
                                resolve(); // Resolve promise without attempting conversion
                            }
                        }
                    });
                });
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


DownloadAndConvertFiles();