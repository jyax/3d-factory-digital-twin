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

// Dynamically import ModelLoader.js
const startServer = async () => {
    try {
        //const { ModelLoader } = await import('./ModelLoader.js');

        app.post('/api/loadModels', async (req, res) => {
            console.log('Received request at /api/loadModels');
            console.log(req.body);
            try {
                //const modelLoader = new ModelLoader(databaseUrl);
                //await modelLoader.loadModelsFromMongoDB();
                res.json({ message: 'Models loaded successfully.' });
            } catch (error) {
                console.error('Error loading models:', error);
                res.status(500).json({ error: 'Failed to load models.' });
            }
        });

        // Define a route that handles the client's request
        // app.get('/api/sendData', (req, res) => {
        //     // Create some data to send to the client
        //     const responseData = { message: 'Data sent from server to client' };
        //
        //     // Send the data to the client as JSON
        //     res.json(responseData);
        //     console.log("test");
        // });

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error starting server:', error);
    }
};

startServer();
