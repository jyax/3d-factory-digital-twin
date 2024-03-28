import express from 'express';
import { MongoClient, GridFSBucket } from 'mongodb';

const app = express();

const port = 9000;
const host = 'http://127.0.0.1' + port;
app.use(express.json());

// Enable CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.listen(port, ()=> console.log(host));

// MongoDB Coonection
const mongodbURL = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(mongodbURL);

// Create bucket
//const bucket = new mongodb.GridFSBucket(db);


async function connectToDB(){
    // try{
    //     const conn = await client.connect();
    //     const db = await conn.db('Magna');
    //     const coll = await db.collection('Factory_Floors');
    //     const result = await coll.find().toArray();
    //     return result;
    // } catch (err) { console.log(err) };
    // return [];
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        return client.db('Magna');
    } catch (err) {
        console.error('Failed to connect to MongoDB:', err);
        throw err;
    }

}

// Save scene data to MongoDB using GridFS
app.post('/Factory_Floors', async (req, res) => {
    
    const db = await connectToDB();
    const sceneData = req.body.sceneData;

    try {
        const bucket = new GridFSBucket(db, {bucketName: 'sceneFiles'});

        const bufferData = Buffer.from(sceneData, 'utf-8');

        const uploadStream = bucket.openUploadStream('scene.json');

        console.log(sceneData);

        uploadStream.write(bufferData);
        uploadStream.end();

        uploadStream.on('finish', () => {
            console.log('Scene saved to MongoDB using GridFS');
            res.sendStatus(200);
        });
    } catch (error) {
        console.error('Error saving scene to MongoDB:', error);
        res.sendStatus(500);
    }
});

app.get('/',(req, res)=>{
    res.send('Hi');
})

// app.get('/Factory_Floors', async (req, res) => {
//     const result = await connectToDB();
//     res.send(result);
// })
