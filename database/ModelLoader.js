import { MongoClient } from 'mongodb';
import { Engine3D } from "@orillusion/core";

// const { MongoClient } = require('mongodb');
// const { Engine3D } = require('@orillusion/core');

/**
 * @class
 * Load in models
 */
class ModelLoader {
    constructor(databaseUrl) {
        this.databaseUrl = databaseUrl;
        this.models = new Map();
    }

    async loadModelsFromMongoDB() {
        const client = new MongoClient(this.databaseUrl);

        try {
            await client.connect();

            const database = client.db(); // You can specify the database name if needed
            const collection = database.collection('Magna-collection');

            const cursor = collection.find({}); // Fetch all documents from the collection

            // Iterate through the documents and load the models
            await cursor.forEach(async (document) => {
                const modelId = document._id; // Assuming _id field contains the model ID
                const glbFile = document.fileData; // Assuming fileData field contains the GLB file
                const object = await Engine3D.res.loadGltf(glbFile); // Load the GLB file

                // Store the loaded model in the models map
                this.models.set(modelId, object);

                // Emit an event indicating model loading progress
                this.emitModelLoadingProgress();
            });

            console.log('All models loaded successfully.');
        } catch (error) {
            console.error('Error loading models from MongoDB:', error);
        } finally {
            await client.close();
        }
    }

    emitModelLoadingProgress() {
        // Emit an event indicating model loading progress
        // You need to implement this method based on your event handling mechanism
    }
}

// Usage example
const databaseUrl = 'mongodb://root:password@localhost:27017';
const modelLoader = new ModelLoader(databaseUrl);
modelLoader.loadModelsFromMongoDB();

//export default ModelLoader;
module.exports = {ModelLoader:ModelLoader};