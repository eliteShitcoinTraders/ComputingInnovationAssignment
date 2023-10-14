from web3 import Web3
import json

# Connect to your local Ganache node
web3 = Web3(Web3.HTTPProvider('http://127.0.0.1:7545'))

contract_address = '0x86107D7459D27b52728CB7A95905D1da69498311'  # Replace with your contract's address


# Specify the path to the ABI JSON file
abi_file_path = 'build/contracts/MyContract.json'

# Load the ABI from the JSON file
with open(abi_file_path, 'r') as abi_file:
    contract_abi = json.load(abi_file)['abi']

    contract = web3.eth.contract(address=contract_address, abi=contract_abi)


