// Server.cjs

const socket = require('socket.io');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { AddToMongoDBServer } = require('./AddToMongoDBServer.cjs');
//const { AddToDirectory } = require('./AddToDirectory.js');

const app = express();
app.use(cors());
app.use(bodyParser.json());
const PORT = 3000;

/**
 * Load models from MongoDB on the capstone server to the scene
 * @returns {Promise<void>}
 * @constructor
 */
const StartServer = async () => {
    try {
        const { ModelLoader } = await import('./GetModelsFromMongoDB.cjs');

        app.post('/api/loadModels', async (req, res) => {
            console.log('received request at /api/loadModels');
            console.log(req.body);
            try {
                const databaseUrl = 'mongodb://root:password@35.9.22.105:27017';
                const databaseName = 'local';
                const modelLoader = new ModelLoader(databaseUrl, databaseName);
                await modelLoader.GetModels();

                // Send the loaded models as JSON in the response
                res.json({ message: 'models loaded successfully', models: modelLoader.models });
            } catch (error) {
                console.error('error loading models:', error);
                res.status(500).json({ error: 'Failed to load models' });
            }
        });

        app.listen(PORT, () => {
            console.log(`server running on port ${PORT}`);
        });
    } catch (error) {
        console.error('error starting server:', error);
    }
};

StartServer();
