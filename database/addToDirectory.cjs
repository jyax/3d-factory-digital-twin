/**
 * add to directory using mongodb
 */
const { MongoClient, GridFSBucket } = require('mongodb');
const fs = require('fs');

// Connection URI
const uri = 'mongodb://localhost:27017/';
const dbName = 'test';

// Path where you want to save the GLB file locally
const localFilePath = '../glb_models';

async function downloadGLBFileFromMongoDB(filename) {
    // Create a new MongoClient
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        // Connect to the MongoDB server
        await client.connect();

        // Access the database
        const db = client.db(dbName);

        // Create a GridFSBucket instance
        const bucket = new GridFSBucket(db);

        // Find the GLB file in the GridFSBucket by filename
        const cursor = bucket.find({ filename: filename });

        // Iterate over the cursor
        await cursor.forEach(async function(file) {
            // Create a write stream to save the GLB file locally
            const writeStream = fs.createWriteStream(localFilePath + '/' + file.filename + '.glb');

            // Pipe the file data from MongoDB to the write stream
            await bucket.openDownloadStreamByName(file.filename).pipe(writeStream);

            console.log(`GLB file "${file.filename}.glb" downloaded successfully to "${localFilePath}"`);
        });
    } catch (error) {
        console.error('Error downloading GLB file:', error);
    } finally {
        // Close the MongoDB connection
        await client.close();
    }
}

// Call the function to download the GLB file
downloadGLBFileFromMongoDB('Assembly Warehouse Table');