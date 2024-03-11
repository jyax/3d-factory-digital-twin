const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs');
const path = require('path');
const { MongoClient, GridFSBucket } = require('mongodb');

/**
 * @class
 * Move from MongoDB to local computer and remote server
 */
class AddToDirectoryAndServer {
    /**
     * Constructor
     * @param {string} url - MongoDB connection URL
     * @param {string} dbName - Database name
     * @param {string} localDirectory - Local directory path for file storage
     * @param {string} remoteHost - Remote server hostname or IP address
     * @param {number} remotePort - Remote server SSH port
     * @param {string} remoteUsername - Username for SSH authentication
     * @param {string} remoteDirectory - Directory on the remote server to transfer files to
     */
    constructor(url, dbName, localDirectory, remoteHost, remotePort, remoteUsername, remoteDirectory) {
        this.url = url;
        this.dbName = dbName;
        this.localDirectory = localDirectory;
        this.remoteHost = remoteHost;
        this.remotePort = remotePort;
        this.remoteUsername = remoteUsername;
        this.remoteDirectory = remoteDirectory;
    }

    /**
     * Connect to MongoDB
     * @returns {Promise<Db>} - A promise that resolves to the MongoDB database object
     */
    async ConnectToDatabase() {
        const client = new MongoClient(this.url);
        try {
            await client.connect();
            console.log('Connected to MongoDB');
            return client.db(this.dbName);
        } catch (err) {
            console.error('Error connecting to MongoDB', err);
            throw err;
        }
    }

    /**
     * Download files from MongoDB, transfer them to a remote server via SCP, and remove local copies
     * @returns {Promise<void>} - A promise that resolves when all files are downloaded, transferred, and local copies are removed
     */
    async DownloadAndTransferFiles() {
        const db = await this.ConnectToDatabase();
        try {
            console.log('MongoDB connection established');

            const bucket = new GridFSBucket(db);
            const filesCursor = bucket.find();
            const fileList = await filesCursor.toArray();
            console.log('File list:', fileList);

            const downloadAndTransferPromises = [];
            for (const file of fileList) {
                let fileName = file.filename;
                if (!fileName.endsWith('.glb')) {
                    fileName += '.glb';
                }
                const outputFilePath = path.join(this.localDirectory, fileName);

                const command = `scp -P ${this.remotePort} "${outputFilePath}" ${this.remoteUsername}@${this.remoteHost}:${this.remoteDirectory}/`;

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
}

const url = 'mongodb://root:password@localhost:27017';
const dbName = 'local';
const localDirectory = '../glb_models_2';
const remoteHost = '35.9.22.105';
const remotePort = 22;
const remoteUsername = 'magna_user';
const remoteDirectory = './shared_files'; // Update with desired remote directory

const addToDirectoryAndServer = new AddToDirectoryAndServer(url, dbName, localDirectory, remoteHost, remotePort, remoteUsername, remoteDirectory);
addToDirectoryAndServer.DownloadAndTransferFiles();

//export default AddToDirectoryAndServer;