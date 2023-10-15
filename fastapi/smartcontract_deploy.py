from fastapi import FastAPI, Depends

from web3 import Web3
import os
from solcx import compile_standard, install_solc
import json


"""ganache connection"""
w3 = Web3(Web3.HTTPProvider("HTTP://127.0.0.1:7545"))

app = FastAPI()




<<<<<<< HEAD
    time.sleep(15)
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
>>>>>>> ee9291d9130271055920a5f9524211f9b3d7d2f6
