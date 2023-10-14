const transaction = artifacts.require("transaction");

module.exports = function (deployer) {
    deployer.deploy(transaction); // Increase the gas limit if necessary
};
