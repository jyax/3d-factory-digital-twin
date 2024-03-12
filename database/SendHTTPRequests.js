<<<<<<< HEAD
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

=======
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

>>>>>>> c8b0355b17775cf58251fd3485db0c1a844acd90
export default SendHTTPRequests;