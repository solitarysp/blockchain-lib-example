import {ethers, } from "ethers";

async function run() {
    const providerEthers = new ethers.providers.JsonRpcProvider("https://wallet.baobab.klaytn.net:8651");
    const resultgetGasPrice = await providerEthers.getGasPrice();
    console.log(resultgetGasPrice)
    const bigNumberValueresultgetGasPrice = ethers.BigNumber.from(resultgetGasPrice._hex);
    console.log(bigNumberValueresultgetGasPrice.toNumber())
    //
    const resultestimateGas = await providerEthers.estimateGas({
        to: "0x55c59eeee480df68f88b106ee54d15a14c6ef951",
        from: "0x55c59eeee480df68f88b106ee54d15a14c6ef951",
        data: null,
    })
    console.log(resultestimateGas)
    const bigNumberValue = ethers.BigNumber.from(resultestimateGas._hex);
    console.log(bigNumberValue.toNumber())
    console.log(bigNumberValueresultgetGasPrice.mul(bigNumberValueresultgetGasPrice).toNumber())
}

run();
