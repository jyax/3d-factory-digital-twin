//const https = require('https');
import https from 'https';

/**
 * @class
 * Send HTTP requests to the docker container
 */
class SendHTTPRequests
{
    async Test()
    {
        console.log("Test");
    }
    async run() {
        await this.Test();
    }
}

const sendHTTPRequests = new SendHTTPRequests();
sendHTTPRequests.run();

export default SendHTTPRequests;