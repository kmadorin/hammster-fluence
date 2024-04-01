// Import the necessary modules from the Fluence client
import { Fluence } from '@fluencelabs/js-client';
import {callProofGenerate} from './service';

// Define the function to start the Fluence client and call a service
async function callFluenceService() {
    // Initialize the Fluence client
    const peerURL = "/ip4/127.0.0.1/tcp/9991/ws/p2p/12D3KooWAaThtWoVupwB7wi9wwNuJWGCv1wobsRt4NLNmhHg1gqA";
    const peerId = "12D3KooWAaThtWoVupwB7wi9wwNuJWGCv1wobsRt4NLNmhHg1gqA";
    const peer = {
        peerId: peerId,
        multiaddr: peerURL
    }
    const client = await Fluence.connect(peer);
    console.log(Fluence);
    console.log("Connected to the Fluence network", client);

    // // Prepare the arguments for the function
    // const a = new Uint8Array([1, 2, 3]);
    // const b = new Uint8Array([4, 5, 6]);
    // const params_bytes = new Uint8Array([7, 8, 9]);

    // // Call the function
    // const result = await client.callService("myService", "proof_generate", [a, b, params_bytes]);

    // console.log(result);
}

// Call the function
callFluenceService();