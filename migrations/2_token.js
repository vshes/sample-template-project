const Token = artifacts.require("Token");
const {account} = require('../.secrets.json');
module.exports = async function(deployer,network,accounts) {
  // Use deployer to state migration tasks.
  await deployer.deploy(Token,"Crypto Learn Hub","CLH","1000000000",account);
};
