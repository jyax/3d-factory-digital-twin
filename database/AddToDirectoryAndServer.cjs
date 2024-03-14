const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs');
const path = require('path');
const { MongoClient, GridFSBucket } = require('mongodb');

/**
 * @class
 * Move from MongoDB to local computer and capstone server
 */
class AddToDirectoryAndServer {
    /**
     * Constructor
     * @param url MongoDB connection URL
     * @param dbName Database name
     * @param localDirectory Local directory path
     * @param remoteHost Remote server hostname or ip
     * @param remotePort Remote server port
     * @param remoteUsername Username for remote server
     * @param remoteDirectory Directory on remote server to transfer files to
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
     * @returns {Promise<*>}
     * @constructor
     */
    async ConnectToDatabase() {
        const client = new MongoClient(this.url);
        try {
            await client.connect();
            console.log('connected to MongoDB');
            return client.db(this.dbName);
        } catch (err) {
            console.error('error connecting to MongoDB', err);
            throw err;
        }
    }

    /**
     * Download files from MongoDB, transfer to capstone server
     * @returns {Promise<void>}
     */
    async DownloadAndTransferFiles() {
        const db = await this.ConnectToDatabase();
        try {
            const bucket = new GridFSBucket(db);
            const filesCursor = bucket.find();
            const fileList = await filesCursor.toArray();

            const promises = [];
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
                            console.log(`file "${fileName}" transferred successfully`);
                            resolve();
                        })
                        .catch((err) => {
                            console.error(`error transferring file "${fileName}"`, err);
                            reject(err);
                        });
                });
                promises.push(transferPromise);
            }

            await Promise.all(promises);
            console.log('all files downloaded and transferred');
        } catch (err) {
            console.error('error downloading and transferring files', err);
        } finally {
            await db.client.close();
        }
    }
}

const url = 'mongodb://root:password@35.9.22.105:27017';
const dbName = 'local';
const localDirectory = '../src/assets/glb_models';
const remoteHost = '35.9.22.105';
const remotePort = 22;
const remoteUsername = 'magna_user';
const remoteDirectory = './shared_files/glb_models';

const addToDirectoryAndServer = new AddToDirectoryAndServer(url, dbName, localDirectory, remoteHost, remotePort, remoteUsername, remoteDirectory);
addToDirectoryAndServer.DownloadAndTransferFiles();

//export default AddToDirectoryAndServer;