const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017'; // Update with MongoDB connection string
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

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

async function uploadFile(filePath, fileName) {
    const fileStream = fs.createReadStream(filePath);
    const uploadStream = gridFSBucket.openUploadStream(fileName);

    fileStream.pipe(uploadStream);

    return new Promise((resolve, reject) => {
        uploadStream.on('finish', resolve);
        uploadStream.on('error', reject);
    });
}

const filePath = 'path/to/your/file.glb';
const fileName = 'example.glb';

uploadFile(filePath, fileName)
    .then(() => console.log('File uploaded successfully'))
    .catch((err) => console.error('Error uploading file', err));
const { GridFSBucket } = require('mongodb');

const database = client.db('test');
const gridFSBucket = new GridFSBucket(database);