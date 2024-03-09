const { MongoClient, GridFSBucket } = require('mongodb');
const path = require('path');

class ModelLoader {
    constructor(databaseUrl, databaseName) {
        this.databaseUrl = databaseUrl;
        this.databaseName = databaseName;
        this.models = {}; // Initialize as an object
    }

    async loadModelsFromMongoDB() {
        const client = new MongoClient(this.databaseUrl);

        try {
            await client.connect();

            const database = client.db(this.databaseName);
            const bucket = new GridFSBucket(database);

            // Clear the existing models object
            this.models = {};

            const filesCursor = bucket.find({});
            const files = await filesCursor.toArray();

            // Iterate through the files and store model information in the object
            for (const file of files) {
                // Extract model name and file path
                const modelName = path.basename(file.filename);
                const filePath = file.metadata && file.metadata.filePath; // Extract file path from metadata
                if (filePath) {
                    // Assign file path to the value only if it exists
                    this.models[modelName] = filePath;
                } else {
                    console.warn(`File path not found for model "${modelName}".`);
                }
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
