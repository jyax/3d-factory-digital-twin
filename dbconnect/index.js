import express from 'express';
import { MongoClient, GridFSBucket } from 'mongodb';

import multer from "multer";

const app = express();

const storage = multer.memoryStorage();
const upload = multer({storage: storage});

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

// MongoDB Connection
const mongodbURL = 'mongodb://34.162.94.101:27017';
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
    console.log(sceneData)

    try {
        const bucket = new GridFSBucket(db, {bucketName: 'sceneFiles'});

        const bufferData = Buffer.from(sceneData, 'utf-8');

        const uploadStream = bucket.openUploadStream('scene.json');

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

app.post('/Get_All_Floors', async (req, res) => {
    const db = await connectToDB();

    try {
        const bucket = new GridFSBucket(db, {bucketName: 'sceneFiles'});
        const names = [];

        const files = await bucket.find({}).toArray();

        files.forEach(file => names.push(file.filename));

        res.send(JSON.stringify(names));

    } catch (error) {
        console.error('Error saving scene to MongoDB:', error);
        res.sendStatus(500);
    }
});

app.post('/Get_Floor', async (req, res) => {
    const db = await connectToDB();
    const bucket = new GridFSBucket(db, {bucketName: 'sceneFiles'});

    const name = req.body.floorName;

    const files = await bucket.find({filename: name}).toArray();
    if (!files || files.length === 0)
        return res.status(404).json({
            err: "Model does not exist."
        });

    const stream = bucket.openDownloadStreamByName(name);
    let buffer = "";

    stream.on("data", chunk => {

        buffer += chunk.toString();
    });

    stream.on("error", err => {
        res.status(500).json({err: "Failed to download JSON file."});
    });

    stream.on("end", () => {
        try {
            const data = JSON.parse(buffer);
            res.json(data);
        } catch (error) {
            res.status(500).json({err: "Failed to parse JSON data."});
        }
    });
});

app.post('/Upload_Model', upload.single('modelData'), async (req, res) => {
    try {
        const db = await connectToDB();
        const bucket = new GridFSBucket(db, {bucketName: 'modelFiles'});

        const uploadStream = bucket.openUploadStream(req.file.originalname, {
            metadata: {modelName: req.body.modelName}
        });

        uploadStream.end(req.file.buffer);
        uploadStream.on("finish", () => {
            res.send("File uploaded successfully.");
            console.log("Model uploaded successfully.");
        });
    } catch (error) {
        console.error('Error saving model to MongoDB:', error);
        res.sendStatus(500);
    }
});

app.post('/Get_Model', async (req, res) => {
    const db = await connectToDB();
    const bucket = new GridFSBucket(db, {bucketName: 'modelFiles'});

    const name = req.body.modelName + ".glb";

    const files = await bucket.find({filename: name}).toArray();
    if (!files || files.length === 0)
        return res.status(404).json({
            err: "Model does not exist."
        });

    bucket.openDownloadStreamByName(name).pipe(res);
});

app.post('/Get_All_Models', async (req, res) => {
    const db = await connectToDB();

    try {
        const bucket = new GridFSBucket(db, {bucketName: 'modelFiles'});
        const names = [];

        const files = await bucket.find({}).toArray();

        files.forEach(file => names.push(file.filename));

        res.send(JSON.stringify(names));

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
