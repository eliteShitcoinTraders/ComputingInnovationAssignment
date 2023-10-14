import Web3 from 'web3';

// Specify the URL of your local Ethereum provider (Ganache)
const localProviderUrl = 'HTTP://127.0.0.1:7545'; // Replace with your Ethereum node URL

// Create a new Web3 instance using the local provider
const web3 = new Web3(new Web3.providers.HttpProvider(localProviderUrl));

export default web3;
