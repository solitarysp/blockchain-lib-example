import {ethers, } from "ethers";

async function run() {
    const providerEthers = new ethers.providers.JsonRpcProvider("https://wallet.baobab.klaytn.net:8651");

    // 0x55C59Eeee480dF68f88B106eE54d15a14C6eF951
    const privateKey = '0x7a8386ebbf02a4acf5397a6296219f8a6e47685e4d4e50f03f46838afb4eef1b';
    const wallet = new ethers.Wallet(privateKey, providerEthers);

    try {
        console.debug(wallet.address)
    } catch (error) {
        console.error('Error sending Ether:', error);
    }
}

run();
