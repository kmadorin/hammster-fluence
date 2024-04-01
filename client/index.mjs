// Import the necessary modules from the Fluence client
import { Fluence } from '@fluencelabs/js-client';

import {
    callSetupParams
} from "../src/compiled-aqua/main.mjs";

// Define the function to start the Fluence client and call a service
async function callFluenceService() {
    // Call the function
    try {
         // Initialize the Fluence client
        const peerMultiAddr = "/ip4/127.0.0.1/tcp/9991/ws/p2p/12D3KooWAaThtWoVupwB7wi9wwNuJWGCv1wobsRt4NLNmhHg1gqA";
        await Fluence.connect(peerMultiAddr);
        const result = await callSetupParams();
        console.log(result);
    } catch (e) {
        console.error(e);
    }
}

// Call the function
callFluenceService();