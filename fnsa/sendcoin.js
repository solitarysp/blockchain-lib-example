import {DirectSecp256k1HdWallet} from '@cosmjs/proto-signing';
import {SigningStargateClient} from '@cosmjs/stargate';
import {stringToPath} from '@cosmjs/crypto';

async function sendCoin(mnemonic, recipientAddress, amount, denom, rpcEndpoint) {
    // Tạo ví từ mnemonic với prefix và đường dẫn tùy chỉnh
    const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
        prefix: 'tlink',
        hdPaths: [stringToPath("m/44'/438'/0'/0/0")]
    });

    // Lấy tài khoản đầu tiên từ ví
    const [firstAccount] = await wallet.getAccounts();

    // Tạo client để kết nối với node
    const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, wallet);

    // Tạo giao dịch gửi coin
    const amountFinal = {
        denom: denom,
        amount: amount.toString(),
    };

    const fee = {
        amount: [{
            denom: denom,
            amount: '5000', // Phí giao dịch
        }],
        gas: '200000', // Gas limit
    };

    const result = await client.sendTokens(firstAccount.address, recipientAddress, [amountFinal], fee, 'Sending tokens');


    console.log('Transaction successful:', result.transactionHash);
}

const mnemonic = 'inspire assault please siege delay illness possible quiz bundle merge warrior what';
const recipientAddress = 'tlink1nv55v0vzqhascd7rjv24tcw98ns83ju28wkuuk';
const amount = 100000; // Số lượng coin muốn gửi
const denom = 'tcony'; // Đơn vị của coin (ví dụ: 'uatom' cho Cosmos Hub)
const rpcEndpoint = 'http://10.241.176.74:26657'; // RPC endpoint của node

sendCoin(mnemonic, recipientAddress, amount, denom, rpcEndpoint).then(() => {
    console.log('Coin sent successfully');
}).catch((error) => {
    console.error('Error sending coin:', error);
});
