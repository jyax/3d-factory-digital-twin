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

// replace this with file needed
const filePath = 'C:\\A College\\d senior year\\2nd semester\\capstone\\code\\factory-digital-twin\\troisjs\\glb_models\\Assembly Warehouse Table.glb';
const fileName = 'Assembly Warehouse Table';

// upload file
uploadFile(filePath, fileName)
    .then(() => console.log('File uploaded successfully'))
    .catch((err) => console.error('Error uploading file', err));
//const { GridFSBucket } = require('mongodb');

//const database = client.db('test');
//const gridFSBucket = new GridFSBucket(database);