/* eslint-disable no-undef */

import Web3 from 'web3';
import ContractData from './Transaction.json'; // Make sure the path is correct

const web3 = new Web3("http://localhost:7545");

const ganacheAccount = { //input different user based on your ganache local server
    address: "0x846BEdD91df6cB8e13C1460f3513155aBD0D2971",
    privateKey: "0x8f4ffabd65924e82add1caccea36825f1b3ca22b7ca97702e35ab8b34d97bbd6"
};

const contractAddress = "0xC75143B48F6C95D252F1dD431CeDA9fb1c3ca963";//check local server for the deployed contract address
const YourContractABI = ContractData.abi;
const contract = new web3.eth.Contract(YourContractABI, contractAddress);



export const purchaseItem = async (itemPriceInWei, itemName, assetId, userName, userEmail) => {
    const gasPrice = await web3.eth.getGasPrice();
    const tx = {
        from: ganacheAccount.address,
        to: contractAddress,
        value: itemPriceInWei,
        gas: 4000000,
        gasPrice: gasPrice,
        data: contract.methods.recordPurchase(itemName, itemPriceInWei, assetId, userName, userEmail).encodeABI()
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



export const getUserPurchaseData = async (startIndex, count) => {
    try {
        // Call the getUserPurchaseData function of the contract using the specific user's address
        const result = await contract.methods.getUserPurchaseData(startIndex, count).call({ from: ganacheAccount.address });

        // Parse and return the result
        const itemPrices = result[1].map(price => web3.utils.fromWei(price.toString(), 'ether'));
        const purchaseTimes = result[2].map(time => Number(time.toString())); // Convert BigInt to Number
        const assetIds = result[3].map(id => id.toString());

        return {itemPrices, purchaseTimes, assetIds };
    } catch (error) {
        console.error("Error fetching user purchase data:", error);
        throw error;
    }
}

export default web3;
