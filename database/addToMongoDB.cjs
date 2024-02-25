/**
 * connect to MongoDB database and upload GLB files
 */
const { MongoClient, GridFSBucket } = require('mongodb');
const fs = require('fs');
const path = require('path');

const uri = 'mongodb+srv://alanfeng6:magnaspring24@magna-cluster.xht2nlr.mongodb.net/';
const dbName = 'Magna-db';
const modelPath = '../glb_models';

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
        throw err; // Rethrow the error to handle it outside
    }
}

/**
 * upload a file
 * @param db database to add to
 * @param filePath file path to add to
 * @param fileName file name to add
 * @returns {Promise<unknown>}
 * @constructor
 */
async function UploadFile(db, filePath, fileName) {
    const bucket = new GridFSBucket(db);

    const metadata = {
        contentType: 'model/gltf-binary', // GLB file content type
        filename: `${fileName}.glb` // Append the .glb extension to the file name
    };

    const fileStream = fs.createReadStream(filePath);

    // Check file size to ensure it contains data
    const stats = fs.statSync(filePath);
    if (stats.size === 0) {
        console.error(`File "${fileName}" is empty. Skipping upload.`);
        return;
    }

    const uploadStream = bucket.openUploadStream(`${fileName}.glb`, { metadata }); // Use the updated file name

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
 * filter only glb files and upload
 * @returns {Promise<void>}
 * @constructor
 */
async function UploadGLBFiles() {
    const db = await ConnectToDatabase();
    try {
        const files = fs.readdirSync(modelPath);
        const glbFiles = files.filter(file => path.extname(file).toLowerCase() === '.glb');

        for (const glbFile of glbFiles) {
            const filePath = path.join(modelPath, glbFile);
            const fileName = path.basename(glbFile, path.extname(glbFile));

            // Check if the file extension is .glb
            if (path.extname(glbFile).toLowerCase() !== '.glb') {
                console.error(`File "${fileName}" does not have a .glb extension. Skipping upload.`);
                continue;
            }

            try {
                // If parsing is successful, upload the file
                await UploadFile(db, filePath, fileName);
            } catch (error) {
                console.error(`File "${fileName}" is not a valid GLB file. Skipping upload.`, error);
            }
        }
    } catch (err) {
        console.error('Error uploading files', err);
    } finally {
        await db.client.close();
    }
}

UploadGLBFiles();
