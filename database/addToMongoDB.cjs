/**
 * connect to MongoDB database and upload GLB files
 */
const { MongoClient, GridFSBucket } = require('mongodb');
const fs = require('fs');
const path = require('path');

const uri = 'mongodb://localhost:27017/';
const dbName = 'test';
const modelPath = '../glb_models';

async function ConnectToDatabase() {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        return client.db(dbName);
    } catch (err) {
        console.error('Error connecting to MongoDB', err);
        throw err; // Rethrow the error to handle it outside
    }
}

async function UploadFile(db, filePath, fileName) {
    const bucket = new GridFSBucket(db);
    const contentType = 'model/gltf-binary'; // GLB file content type

    const fileStream = fs.createReadStream(filePath);

    // Check file size to ensure it contains data
    const stats = fs.statSync(filePath);
    if (stats.size === 0) {
        console.error(`File "${fileName}" is empty. Skipping upload.`);
        return;
    }

    const uploadStream = bucket.openUploadStream(fileName, { contentType });

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

async function UploadGLBFiles() {
    const db = await ConnectToDatabase();
    try {
        const files = fs.readdirSync(modelPath);
        const glbFiles = files.filter(file => path.extname(file).toLowerCase() === '.glb');

        for (const glbFile of glbFiles) {
            const filePath = path.join(modelPath, glbFile);
            const fileName = path.basename(glbFile, path.extname(glbFile));
            await UploadFile(db, filePath, fileName);
        }
    } catch (err) {
        console.error('Error uploading files', err);
    } finally {
        await db.client.close();
    }
}

UploadGLBFiles();
