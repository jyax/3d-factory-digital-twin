/**
 * class to connect to MongoDB database and upload GLB files
 */
const { MongoClient } = require('mongodb');

// replace this with connection string
const uri = 'mongodb://localhost:27017/';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

/**
 * connect to database
 */
async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB', err);
    }
}

connectToDatabase();
const { GridFSBucket } = require('mongodb');

const database = client.db('test');
const gridFSBucket = new GridFSBucket(database);
const fs = require('fs');
const path = require('path');

/**
 * upload file
 * @param filePath path of the file to add
 * @param fileName name of the file to add
 * @returns {Promise<unknown>}
 */
async function uploadFile(filePath, fileName) {
    const fileStream = fs.createReadStream(filePath);
    const uploadStream = gridFSBucket.openUploadStream(fileName);

    fileStream.pipe(uploadStream);

    return new Promise((resolve, reject) => {
        uploadStream.on('finish', resolve);
        uploadStream.on('error', reject);
    });
}

// replace this with file if needed
const filePath = '../glb_models/Assembly Warehouse Table.glb';
const fileName = 'Assembly Warehouse Table';

const modelPath = '../glb_models';

(async () => {
    try {
        // Get a list of all files in the directory
        const files = fs.readdirSync(modelPath);

        // Filter out only the GLB files
        const glbFiles = files.filter(file => path.extname(file).toLowerCase() === '.glb');

        // Loop through each GLB file and upload
        for (const file of glbFiles) {
            const filePath = path.join(modelPath, file);
            const fileName = path.basename(file, path.extname(file));
            await uploadFile(filePath, fileName);
            console.log(`File "${fileName}" uploaded successfully`);
        }

        // upload specific file
        await uploadFile(filePath, fileName);
        console.log('File uploaded successfully');
    } catch (err) {
        console.error('Error uploading files', err);
    } finally {
        // Close the connection
        await client.close();
    }
})();