import {ethers,} from "ethers";

async function run() {
    const providerEthers = new ethers.providers.JsonRpcProvider("https://wallet.baobab.klaytn.net:8651");


    try {
        // Send a transaction
        const txResponse = await providerEthers.getBalance('0x55C59Eeee480dF68f88B106eE54d15a14C6eF951')
        console.log('Transaction hash:', txResponse.toString());
    } catch (error) {
        console.error('Error sending Ether:', error);
    }
}

run();
