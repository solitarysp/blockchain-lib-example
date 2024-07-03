
import {ethers, } from "ethers";
const message = "DOSI VAULT";
const signature = "0xd7d9fe0837708e0a4e1c1e1e59f22c7edfbf266ca44cddc730c9e2f5810e7ff9770b5a6a2c1c5741b488905378518976d02d8b3c5a6ad945ce1aace8acfb3f211b";
const publicKey = "0x04e51e858b7b39bc16a91d1d04564ca8c27bc147b719e14ccbaf65e177b7cb17305655ba8087308e3ca80f5970c40382b1ae40d5b91cfffe893623b9a38cbf63c7";
const address= "0x55C59Eeee480dF68f88B106eE54d15a14C6eF951";
function verifySignature( ) {
    try {
        // Recover the address from the signature
        const recoveredAddress = ethers.utils.verifyMessage(message, signature);
        console.log(`recoveredAddress: ${recoveredAddress}`)
        console.log(`recoveredAddress: ${address}`)
        // Compare the recovered address with the expected address
        if (recoveredAddress.toLowerCase() === address.toLowerCase()) {
            console.log("Verification successful: The signature is valid.");
        } else {
            console.log("Verification failed: The signature is invalid.");
        }
    } catch (error) {
        console.error("An error occurred during signature verification:", error);
    }
}

verifySignature();
