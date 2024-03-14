<<<<<<< HEAD
const { MongoClient, GridFSBucket } = require('mongodb');
const fs = require('fs');
const path = require('path');

class ModelLoader {
    constructor(databaseUrl, databaseName) {
        this.databaseUrl = databaseUrl;
        this.databaseName = databaseName;
        this.models = new Map();
    }

    async loadModelsFromMongoDB() {
        const client = new MongoClient(this.databaseUrl);

        try {
            await client.connect();

            const database = client.db(this.databaseName);
            const bucket = new GridFSBucket(database);

            // Clear the existing models map
            this.models.clear();

            const filesCursor = bucket.find({});
            const files = await filesCursor.toArray();

            // Iterate through the files and store model information in the map
            for (const file of files) {
                const modelId = file._id;
                // Assuming _id field contains the model ID and the file name represents the model
                const modelName = path.basename(file.filename);
                this.models.set(modelId, modelName);
            }

            console.log('All models loaded successfully.');
        } catch (error) {
            console.error('Error loading models from MongoDB:', error);
        } finally {
            await client.close();
        }
    }
}

module.exports = { ModelLoader: ModelLoader };
=======
const { MongoClient, GridFSBucket } = require('mongodb');
const fs = require('fs');
const path = require('path');

class ModelLoader {
    constructor(databaseUrl, databaseName) {
        this.databaseUrl = databaseUrl;
        this.databaseName = databaseName;
        this.models = new Map();
    }

    async loadModelsFromMongoDB() {
        const client = new MongoClient(this.databaseUrl);

        try {
            await client.connect();

            const database = client.db(this.databaseName);
            const bucket = new GridFSBucket(database);

            // Clear the existing models map
            this.models.clear();

            const filesCursor = bucket.find({});
            const files = await filesCursor.toArray();

            // Iterate through the files and store model information in the map
            for (const file of files) {
                const modelId = file._id;
                // Assuming _id field contains the model ID and the file name represents the model
                const modelName = path.basename(file.filename);
                this.models.set(modelId, modelName);
            }

            console.log('All models loaded successfully.');
        } catch (error) {
            console.error('Error loading models from MongoDB:', error);
        } finally {
            await client.close();
        }
    }
}

module.exports = { ModelLoader: ModelLoader };
>>>>>>> c8b0355b17775cf58251fd3485db0c1a844acd90
