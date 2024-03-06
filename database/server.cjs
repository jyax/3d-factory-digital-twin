// server.cjs

//import socket from 'socket.io';
const socket = require('socket.io');
const express = require('express');
//import { MongoClient } from 'mongodb';
//import ModelLoader from './ModelLoader';
const cors = require('cors');
const bodyParser = require('body-parser'); // Import body-parser
//const { AddToDirectory } = require('./AddToDirectory.cjs');

const app = express();
app.use(cors());
app.use(bodyParser.json()); // Use body-parser for JSON parsing
const PORT = 3000;
const databaseUrl = 'mongodb://root:password@mongodb:27017'; // Use the service name defined in Docker Compose

// Initialize ModelLoader with database URL
//const modelLoader = new ModelLoader(databaseUrl);

// API endpoint to load models from MongoDB
app.get('/api/loadModels', async (req, res) => {
    console.log('Received request at /api/loadModels');
    console.log(req.body);
    // try {
    //     await modelLoader.loadModelsFromMongoDB();
    //     res.json({ message: 'Models loaded successfully.' });
    // } catch (error) {
    //     console.error('Error loading models:', error);
    //     res.status(500).json({ error: 'Failed to load models.' });
    // }
});

// Use async/await to make server listen asynchronously
const startServer = async () => {
    await new Promise((resolve, reject) => {
        app.listen(PORT, (err) => {
            if (err) {
                reject(err);
            } else {
                console.log(`Server running on port ${PORT}`);
                resolve();
            }
        });
    });
};

startServer().catch(err => {
    console.error('Error starting server:', err);
});

// // server.cjs
//
// //import socket from 'socket.io';
// const socket = require('socket.io');
// const express = require('express');
// //import { MongoClient } from 'mongodb';
// //import ModelLoader from './ModelLoader';
// const cors = require('cors');
// //const { AddToDirectory } = require('./AddToDirectory.cjs');
//
// const app = express();
// app.use(cors());
// app.use(express.json());
// const PORT = 3000;
// const databaseUrl = 'mongodb://root:password@mongodb:27017'; // Use the service name defined in Docker Compose
//
// // Initialize ModelLoader with database URL
// //const modelLoader = new ModelLoader(databaseUrl);
//
// // API endpoint to load models from MongoDB
// app.post('/api/loadModels', async (req, res) => {
//     console.log(req.body);
//     // try {
//     //     await modelLoader.loadModelsFromMongoDB();
//     //     res.json({ message: 'Models loaded successfully.' });
//     // } catch (error) {
//     //     console.error('Error loading models:', error);
//     //     res.status(500).json({ error: 'Failed to load models.' });
//     // }
// });
//
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
