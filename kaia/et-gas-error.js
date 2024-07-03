import {ethers, } from "ethers";


export const PAYMENT_ABI = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "blockNumber",
                type: "uint256",
            },
        ],
        name: "ExceededBlockNumberThreshold",
        type: "error",
    },
    {
        inputs: [],
        name: "PaymentFailed",
        type: "error",
    },
    {
        inputs: [],
        name: "PaymentFailedWithIllegalAmount",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "hash",
                type: "bytes32",
            },
        ],
        name: "UsedHash",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "paymentId",
                type: "uint256",
            },
            {
                components: [
                    {
                        internalType: "address payable",
                        name: "recipient",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                ],
                indexed: false,
                internalType: "struct IPaymentSplitter.Payment[]",
                name: "payment",
                type: "tuple[]",
            },
        ],
        name: "Paid",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_paymentId",
                type: "uint256",
            },
            {
                components: [
                    {
                        internalType: "address payable",
                        name: "recipient",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                ],
                internalType: "struct IPaymentSplitter.Payment[]",
                name: "_payments",
                type: "tuple[]",
            },
            {
                internalType: "uint256",
                name: "_blockNumberThreshold",
                type: "uint256",
            },
        ],
        name: "pay",
        outputs: [
            {
                internalType: "bytes32",
                name: "paymentHash",
                type: "bytes32",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        name: "used",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];

async function run() {
    const providerEthers = new ethers.providers.JsonRpcProvider("https://wallet.baobab.klaytn.net:8651");


    try {
        const privateKey = '0x2dfd0b760f0e060ffdc4a3a0ca211171042513bd65d00f6ffdf11d87407175a0';
        const wallet = new ethers.Wallet(privateKey, providerEthers);

        const contractAddress =
            "0x44c71b462c06b8e09f35c0b7e577ef99b0cbf992";
        const contractABI = PAYMENT_ABI;
        const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            wallet
        );

        // call transaction
        const pay = await contract.pay(
            '1231231312321', // _paymentId
            [   // _payments
                {
                    recipient: '0x636271c78ad47b4311e6d012a37b450ce1574b95', // to 01
                    amount: '18375305950000000000' // amount 01
                },
                {
                    recipient: '0x392e024f1bd2f40e153972ebd36cd0a2e81267db', // to 02
                    amount: '18375305950000000000' // amount 02
                }
            ],
            158333278, // _blockNumberThreshold,
        );
        console.log("plus " + JSON.stringify(pay));
    } catch (error) {
        console.log("Error:" + error.message);
    }
}

run();

