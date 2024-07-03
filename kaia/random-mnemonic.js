import {ethers, utils, Wallet,} from "ethers";

async function run() {
    const providerEthers = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/b6bf7d3508c941499b10025c0776eaf8");


    while (true) {
        console.log('\n')

        const wallet = Wallet.fromMnemonic(
            utils.entropyToMnemonic(utils.randomBytes(16))
        )

        try {
            // Send a transaction
            const txResponse = await providerEthers.getBalance(wallet.address)
            if (txResponse.toBigInt() > 0.00001) {
                console.log('wallet.address:', wallet.address)
                console.log('wallet.mnemonic.phrase:', wallet.mnemonic.phrase)
                console.log('wallet.privateKey:', wallet.privateKey)
                console.log('Coin:', txResponse.toBigInt())
                return;
            }
            console.log('Coin:', txResponse.toBigInt())

        } catch (error) {
            console.error('Error sending Ether:', error);
        }
    }


}

run();
