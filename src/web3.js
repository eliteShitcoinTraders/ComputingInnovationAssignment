// Frontend: React + Web3.js
import Web3 from 'web3';
import ContractData from './Transaction.json'; // Make sure the path is correct

const web3 = new Web3("http://localhost:7545");

const ganacheAccount = {
    address: "0xBDa40Ae46877164F9BD16AD63C08d2Bdf2A53193",
    privateKey: "0x3eb5771fe77ccd722f8cf13002a2255bf895a8127802a83a9430967cb1387664"
};

const contractAddress = "0xeDb6d5A8B901Ba16F3E11Dc3Ce4973FE22C831aD";
const YourContractABI = ContractData.abi;
export const purchaseItem = async (itemPriceInWei, itemName, assetId) => {
    const contract = new web3.eth.Contract(YourContractABI, contractAddress);
    const gasPrice = await web3.eth.getGasPrice();
    const tx = {
        from: ganacheAccount.address,
        to: contractAddress,
        value: itemPriceInWei,
        gas: 4000000,
        gasPrice: gasPrice,
        data: contract.methods.recordPurchase(itemName, itemPriceInWei, assetId).encodeABI()
    };

    const signedTx = await web3.eth.accounts.signTransaction(tx, ganacheAccount.privateKey);
    return web3.eth.sendSignedTransaction(signedTx.rawTransaction)
        .on('confirmation', (confirmationNumber, receipt) => {
            if (confirmationNumber === 1) {
                console.log("Transaction confirmed!", receipt);
                // Optionally: Notify backend.
                fetch("http://localhost:8000/transaction-confirmed/", {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(receipt)
                });
            }
        });
}

export default web3;
