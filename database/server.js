// server.js

import express from 'express';
import { MongoClient } from 'mongodb';
import ModelLoader from './ModelLoader';

const app = express();
const PORT = 5173;
const databaseUrl = 'mongodb://root:password@mongodb:27017'; // Use the service name defined in Docker Compose

// Initialize ModelLoader with database URL
const modelLoader = new ModelLoader(databaseUrl);

// API endpoint to load models from MongoDB
app.get('/api/loadModels', async (req, res) => {
    try {
        await modelLoader.loadModelsFromMongoDB();
        res.json({ message: 'Models loaded successfully.' });
    } catch (error) {
        console.error('Error loading models:', error);
        res.status(500).json({ error: 'Failed to load models.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
