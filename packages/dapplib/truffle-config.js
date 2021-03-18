require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid narrow fortune stone stool crawl six purity inflict brand fringe giant'; 
let testAccounts = [
"0x4f031c612fb4ef0fb7abb24a8459b37bea92a4f518bca120074a4ff6bf26c574",
"0x0c16f86bf4e0d3b4e717c782736dd0db3cdd6746ca7eb3dad7fb64510813bae4",
"0xb4a7c9943233cb895c3aa46113a0d32a73eaf6e13f3f1f150901f0660ece01c9",
"0x9da46aeba559f44ab8ee47ee72fc1eb96bb48f313f11b21378a7bd9bfe8831bf",
"0x59e1539bd35438becb52c38078469f9ebb802e21c60f7c77f13b1418d2ac921c",
"0xac2475c4a3c4b9558c14af86c5a6ae5f99508c7ae0deb063d23e6442ef58d922",
"0xa7e1e519464b7944e5d99251c42676f1dface16874c32903af5a5678264c11a5",
"0x8c56aa3b8cbf68355c694ee38380036116514ad90bbc236dd9a52cae1e4014df",
"0xaadabdb08bdfdd4fa044a85596bf40e393cc864f459b47ae76f2d6b6d7b42834",
"0xcf7ae8872adb57648773eb37eae123e6b1b42a506d1da9776a86ccc46ec772a9"
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
            version: '^0.5.11'
        }
    }
};
