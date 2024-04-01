// Import the necessary modules from the Fluence client
import { Fluence } from '@fluencelabs/js-client';

import {
    callProofGenerate,
    helloWorld,
    callSetupParams
} from "../src/compiled-aqua/main.mjs";

// Define the function to start the Fluence client and call a service
async function callFluenceService() {
    // Initialize the Fluence client
    const peerURL = "/ip4/127.0.0.1/tcp/9993/ws/p2p/12D3KooWDLa5kvcaabyK6ttuA2UdXWYZYfHjgMygeUbUP7ZZHLGb";
    const peerId = "12D3KooWDLa5kvcaabyK6ttuA2UdXWYZYfHjgMygeUbUP7ZZHLGb";
    const peer = {
        peerId: peerId,
        multiaddr: peerURL
    }
    const client = await Fluence.connect(peerURL);

    // // Prepare the arguments for the function
    const a = new Uint8Array([0, 1, 1]);
    const b = new Uint8Array([1, 1, 1]);
    const params_bytes = new Uint8Array([1, 1, 1]);

    // Call the function
    try {
        const result = await callSetupParams();
        // const resuxlt = await callProofGenerate(a, b, params_bytes);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
}

// Call the function
callFluenceService();