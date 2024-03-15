// const { MongoClient, GridFSBucket } = require('mongodb');
// const path = require('path');

import { MongoClient, GridFSBucket } from "mongodb";
import path from 'path';

/**
 * @class
 * Get models from MongoDB and store them in an object
 */
class GetModelsFromMongoDB {
    constructor(databaseUrl, databaseName) {
        this.databaseUrl = databaseUrl;
        this.databaseName = databaseName;
        this.models = {};
    }

    /**
     * Get models from MongoDB and store them in this.models
     * @returns {Promise<void>}
     * @constructor
     */
    async GetModels() {
        const client = new MongoClient(this.databaseUrl);

        try {
            await client.connect();

            const database = client.db(this.databaseName);
            const bucket = new GridFSBucket(database);

            this.models = {};

            const filesCursor = bucket.find({});
            const files = await filesCursor.toArray();

            for (const file of files) {
                const modelName = path.basename(file.filename);
                const filePath = file.metadata && file.metadata.filePath;
                if (filePath) {
                    this.models[modelName] = filePath;
                } else {
                    console.warn(`file path not found for model "${modelName}"`);
                }
            }

            console.log('all models loaded');
        } catch (error) {
            console.error('error loading models from MongoDB:', error);
        } finally {
            await client.close();
        }
    }
}

//module.exports = { ModelLoader: GetModelsFromMongoDB };
export default GetModelsFromMongoDB;