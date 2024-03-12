// server.cjs

const socket = require('socket.io');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
//import ModelLoader from './ModelLoader';
//const { AddToDirectory } = require('./AddToDirectory.cjs');

const app = express();
app.use(cors());
app.use(bodyParser.json());
const PORT = 3000;

// Dynamically import ModelLoader.cjs
const startServer = async () => {
    try {
        const { ModelLoader } = await import('./ModelLoader.cjs');

        app.post('/api/loadModels', async (req, res) => {
            console.log('Received request at /api/loadModels');
            console.log(req.body);
            try {
                const databaseUrl = 'mongodb://root:password@localhost:27017';
                const databaseName = 'local';
                const modelLoader = new ModelLoader(databaseUrl, databaseName);
                await modelLoader.loadModelsFromMongoDB();

                // Send the loaded models as JSON in the response
                res.json({ message: 'Models loaded successfully.', models: Array.from(modelLoader.models) });
            } catch (error) {
                console.error('Error loading models:', error);
                res.status(500).json({ error: 'Failed to load models.' });
            }
        });

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error starting server:', error);
    }
};

startServer();
