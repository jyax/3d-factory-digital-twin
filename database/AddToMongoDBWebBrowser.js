import { App } from 'realm-web';
import path from 'path';

class AddToMongoDBWebBrowser {
    constructor(appId, modelInputId) {
        this.appId = appId;
        this.modelInputId = modelInputId;
    }

    async uploadFile(fileName, fileBuffer) {
        const realmApp = new App({ id: this.appId });

        try {
            await realmApp.logIn(App.Credentials.anonymous());

            const mongoClient = realmApp.currentUser.mongoClient('mongodb-atlas');
            const database = mongoClient.db('Magna-db');
            const collection = database.collection('Magna-collection');

            // Example: Inserting a document with the file as binary data
            await collection.insertOne({
                fileName: fileName,
                fileData: fileBuffer
            });

            console.log(`File "${fileName}" uploaded successfully`);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    }

    async handleFileChange(files) {
        try {
            console.log('Starting file upload process...');
            for (const file of files) {
                const fileName = path.basename(file.name, path.extname(file.name));
                console.log(`Uploading file: ${fileName}.glb`);
                const fileBuffer = await this.readFileAsArrayBuffer(file);
                await this.uploadFile(`${fileName}.glb`, fileBuffer);
                console.log(`File upload completed: ${fileName}.glb`);
            }
            console.log('File upload process completed.');
        } catch (err) {
            console.error('Error during file upload process:', err);
        }
    }

    readFileAsArrayBuffer(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsArrayBuffer(file);
        });
    }

    async run() {
        const modelInput = document.getElementById(this.modelInputId);
        if (modelInput) {
            modelInput.addEventListener('change', async (event) => {
                const fileList = event.target.files;
                await this.handleFileChange(fileList);
            });
        } else {
            console.error(`Element with ID "${this.modelInputId}" not found.`);
        }
    }
}

// Provide your MongoDB Realm App ID
const appId = 'your-realm-app-id';
// Provide the ID of the input element for selecting model files
const modelInputId = 'modelInput';

const addToMongoDB = new AddToMongoDBWebBrowser(appId, modelInputId);
addToMongoDB.run();

export default AddToMongoDBWebBrowser;
