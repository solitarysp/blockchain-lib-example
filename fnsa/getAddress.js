import {DirectSecp256k1HdWallet} from "@cosmjs/proto-signing";
import {Slip10, stringToPath} from "@cosmjs/crypto";

async function getAddressFromMnemonic(mnemonic) {
    // Tạo ví từ mnemonic
    const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
        prefix: 'tlink',
        hdPaths: [stringToPath("m/44'/438'/0'/0/0")]
    });

    // Lấy tài khoản đầu tiên từ ví
    const [account] = await wallet.getAccounts();
    // Địa chỉ của tài khoản
    const address = account.address;

    return address;
}

const mnemonic = 'inspire assault please siege delay illness possible quiz bundle merge warrior what';
getAddressFromMnemonic(mnemonic).then(address => {
    console.log('Address:', address);
});
