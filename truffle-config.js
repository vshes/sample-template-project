
const HDWalletProvider = require("@truffle/hdwallet-provider");
const {projectId, mnemonic,} = require('./.secrets.json');


module.exports = {
   contract_directory:"./contracts/",

  networks: {
    development: {
     host:"http://127.0.0.1",     // Localhost (default: none)
     port:"7545",            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic,`https://ropsten.infura.io/v3/${projectId}`),
      network_id:3,
      gas: 5500000,
      confirmations:2,
      timeoutBlocks:200,
      skipDryRun:true
    }
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.7",    // Fetch exact version from solc-bin (default: truffle's version)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
       optimizer: {
         enabled: false,
         runs: 200
       },
       evmVersion: "byzantium"
      }
    }
  },

 
};
