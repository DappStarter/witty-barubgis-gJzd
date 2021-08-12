require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entry brown venture stomach cost six proof guess entire slot gather'; 
let testAccounts = [
"0x223674de5389ae1a6f0acbc8a92d97338ce430c7affff1fa24ea994b2dff47d1",
"0xf6d7304d0ebbc72b93e9a344a2c2c348fdedc7a830b4aaad2e98d381465ef8af",
"0xc0976482fb1542d34b3650605b24ee576bc24a3f494914d9086dce973752e274",
"0xa77703fc8e473a8f253e34487c3339af05687d156df00b9abad5a2b288bc556b",
"0x359e1efdb8933fb7ff861676c316ab0408319bd93a4ace186479bff3371b4a68",
"0x287213fce1c2aa2d7734099512769c9f17aa14f70b4bbf0cdf6dda986a2d2c2a",
"0x921fd05dfdea68dded7e58821297e3f01f7210ab84d74ce4aa37daab3cf6fdc0",
"0x8dbe8b20b9100e3a2e2b9b019be5d88f79061f5e5db98bbc83c8a45d773e7057",
"0x8b587cbe43c5a4847aabff4acb5eb0efff660aa4e1c7a8f4ac4d71a685128a43",
"0x9b94df98fa95540545e05e18b758235fb2cf2213e1810b890dd60faee6782b9c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

