import {ethers, } from "ethers";

async function run() {
    const providerEthers = new ethers.providers.JsonRpcProvider("https://wallet.baobab.klaytn.net:8651");

    // 0x55C59Eeee480dF68f88B106eE54d15a14C6eF951
    const privateKey = '0x2dfd0b760f0e060ffdc4a3a0ca211171042513bd65d00f6ffdf11d87407175a0';
    const wallet = new ethers.Wallet(privateKey, providerEthers);
    const recipientAddress = '0xbFB24D8CCf81fFbCE0A5E54cF5b0bb5F046E51Ef';
    const amountInEther = '2';  // Amount of Ether you want to send

    // Create a transaction object
    const tx = {
        to: recipientAddress,
        // Convert Ether to Wei
        value: ethers.utils.parseEther(amountInEther)
    };

    try {
        // Send a transaction
        const txResponse = await wallet.sendTransaction(tx);
        console.log('Transaction hash:', txResponse.hash);

        // Wait for the transaction to be mined
        const receipt = await txResponse.wait();
        console.log('Transaction confirmed in block:', receipt.blockNumber);
    } catch (error) {
        console.error('Error sending Ether:', error);
    }
}

run();
