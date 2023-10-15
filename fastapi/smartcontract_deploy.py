// Frontend: React + Web3.js

import Web3 from 'web3';
import YourContractABI from './build/contracts/YourContractABI.json';


const web3 = new Web3("http://localhost:7545");

const ganacheAccount = {
    address: "0xBDa40Ae46877164F9BD16AD63C08d2Bdf2A53193",
    privateKey: "0x3eb5771fe77ccd722f8cf13002a2255bf895a8127802a83a9430967cb1387664"
};
contractAddress= "0xeDb6d5A8B901Ba16F3E11Dc3Ce4973FE22C831aD"

async function purchaseItem(itemPriceInWei, itemName, assetId) {
    const contract = new web3.eth.Contract(YourContractABI, contractAddress);

    const tx = {
        from: ganacheAccount.address,
        to: contractAddress,
        value: itemPriceInWei,
        gas: 2000000,
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
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(receipt)
                });
            }
        });
}

<<<<<<< HEAD
=======

@app.get("/")
async def funcTest1():
    # type your address here
    w3 = Web3(Web3.HTTPProvider("HTTP://127.0.0.1:7545"))
    # Default is 1337 or with the PORT in your Gaanche
    chain_id = 1337
    # Find in you account
    my_address = "0xA91e61d2941F0836DBcCC0573B1c897FfEf8BBA7"
    # Find in you account
    private_key = "0x9c2cccea8950a2c977f25b2ec6859c2a34791d70a99ee3273be6d69d74c2b91f"


    with open("./SimpleStorage.sol", "r") as file:
        simple_storage_file = file.read()
        
    install_solc("0.6.0")
    compiled_sol = compile_standard(
        {
            "language": "Solidity",
            "sources": {"SimpleStorage.sol": {"content": simple_storage_file}},
            "settings": {
                "outputSelection": {
                    "*": {"*": ["abi", "metadata", "evm.bytecode", "evm.sourceMap"]}
                }
            },
        },
        solc_version="0.6.0",
    )

    with open("compiled_code.json", "w") as file:
        json.dump(compiled_sol, file)

    # get bytecode
    bytecode = compiled_sol["contracts"]["SimpleStorage.sol"]["SimpleStorage"]["evm"][
        "bytecode"
    ]["object"]

    # get abi
    abi = compiled_sol["contracts"]["SimpleStorage.sol"]["SimpleStorage"]["abi"]


    SimpleStorage = w3.eth.contract(abi=abi, bytecode=bytecode)

    nonce = w3.eth.get_transaction_count(my_address)

    transaction = SimpleStorage.constructor().build_transaction(
        {
            "chainId": chain_id,
            "gasPrice": w3.eth.gas_price,
            "from": my_address,
            "nonce": nonce,
        }
    )
    transaction.pop('to')


    signed_txn = w3.eth.account.sign_transaction(transaction, private_key=private_key)
    tx_hash = w3.eth.send_raw_transaction(signed_txn.rawTransaction)
    tx_receipt = w3.eth.wait_for_transaction_receipt(tx_hash)


    simple_storage = w3.eth.contract(address=tx_receipt.contractAddress, abi=abi)

    store_transaction = simple_storage.functions.store(67).build_transaction(
        {
            "chainId": chain_id,
            "gasPrice": w3.eth.gas_price,
            "from": my_address,
            "nonce": nonce + 1,
        }
    )

    signed_store_txn = w3.eth.account.sign_transaction(store_transaction, private_key=private_key)
    send_store_tx = w3.eth.send_raw_transaction(signed_store_txn.rawTransaction)
    tx_receipt = w3.eth.wait_for_transaction_receipt(send_store_tx)

    
    return "Hello, this is contract deploy preocess"
>>>>>>> f8c5e512e1eb4c1993fec82b2146fe0f30998a8d
