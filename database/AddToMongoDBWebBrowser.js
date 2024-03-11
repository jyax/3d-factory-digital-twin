import { App } from 'realm-web';
import path from 'path';

class AddToMongoDBWebBrowser {
    constructor(appId) {
        this.appId = appId;
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
        try {
            const fileInput = await this.promptForFiles();
            if (fileInput.files.length > 0) {
                await this.handleFileChange(Array.from(fileInput.files));
            } else {
                console.warn('No files selected.');
            }
        } catch (error) {
            console.error('Error while prompting for files:', error);
        }
    }

    promptForFiles() {
        return new Promise((resolve, reject) => {
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.multiple = true;
            fileInput.addEventListener('change', () => {
                resolve(fileInput);
            });

            // Create a button to trigger the file input dialog
            const button = document.createElement('button');
            button.textContent = 'Select Files';
            button.addEventListener('click', () => {
                fileInput.click();
            });

            // Append the button to the document body
            document.body.appendChild(button);
        });
    }
}

// const appId = 'application-0-irddfd';
//
// const addToMongoDBWebBrowser = new AddToMongoDBWebBrowser(appId);
// addToMongoDBWebBrowser.run();

export default AddToMongoDBWebBrowser;
