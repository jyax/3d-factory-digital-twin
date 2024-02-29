/**
 * connect to MongoDB database and upload GLB files
 */
const { MongoClient, GridFSBucket } = require('mongodb');
const fs = require('fs');
const path = require('path');
const { pipeline } = require('stream');

const uri = 'mongodb://localhost:27017/';
const dbName = 'local';
const modelPath = '../glb_models';

/**
 * connect to mongodb
 * @returns {Promise<MongoClient>}
 */
async function ConnectToDatabase() {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        return client; // Return the client object
    } catch (err) {
        console.error('Error connecting to MongoDB', err);
        throw err;
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
        contentType: 'model/gltf-binary',
        filename: `${fileName}.glb`
    };

    // Check file size to ensure it contains data
    const stats = fs.statSync(filePath);
    if (stats.size === 0) {
        console.error(`File "${fileName}" is empty. Skipping upload.`);
        return Promise.resolve(); // Return a resolved promise if the file is empty
    }

    console.log(`Starting upload for file: ${fileName}.glb`);

    // Create the upload stream outside of the Promise constructor
    const uploadStream = bucket.openUploadStream(metadata);

    // Wrap the file reading in a promise-based function
    const readFile = () => {
        return new Promise((resolve, reject) => {
            const fileStream = fs.createReadStream(filePath);
            fileStream.on('error', reject);
            fileStream.pipe(uploadStream)
                .on('finish', resolve) // Resolve the promise when the file stream has been fully piped
                .on('error', reject);  // Reject the promise if there's an error during piping
        });
    };

    return new Promise((resolve, reject) => {
        // Handle errors during upload
        uploadStream.on('error', err => {
            console.error(`Error uploading file "${fileName}":`, err);
            reject(err);
        });

        // Handle completion of upload
        uploadStream.once('finish', () => {
            console.log(`File "${fileName}" uploaded successfully`);
            resolve();
        });

        // Call the readFile function to start reading the file
        readFile().catch(reject);
    });
}

/**
 * filter only glb files and upload
 * @param {MongoClient} client MongoDB client
 */
async function UploadGLBFiles(client) {
    const db = client.db(dbName);
    try {
        console.log('Starting file upload process...');
        const files = fs.readdirSync(modelPath);
        const glbFiles = files.filter(file => path.extname(file).toLowerCase() === '.glb');

        console.log(`Found ${glbFiles.length} .glb files to upload.`);

        for (const glbFile of glbFiles) {
            const filePath = path.join(modelPath, glbFile);
            const fileName = path.basename(glbFile, path.extname(glbFile));

            // Check if the file extension is .glb
            if (path.extname(glbFile).toLowerCase() !== '.glb') {
                console.error(`File "${fileName}" does not have a .glb extension. Skipping upload.`);
                continue;
            }

            console.log(`Processing file: ${fileName}.glb`); // Log the file being processed

            try {
                console.log(`Uploading file: ${fileName}.glb`);
                await UploadFile(db, filePath, fileName);
                console.log(`File upload completed: ${fileName}.glb`); // Log the completion of file upload
            } catch (error) {
                console.error(`Error uploading file "${fileName}.glb":`, error);
            }
        }

        console.log('File upload process completed.');
    } catch (err) {
        console.error('Error during file upload process:', err);
    } finally {
        console.log('Closing MongoDB connection...');
        await client.close();
        console.log('MongoDB connection closed.');
    }
}

(async () => {
    const client = await ConnectToDatabase();
    await UploadGLBFiles(client);
})();