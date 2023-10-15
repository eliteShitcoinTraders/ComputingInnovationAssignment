// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Transaction {
    struct Purchase {
        string itemName;
        uint256 itemPrice;
        uint256 purchasedTime;
        uint256 assetId; // New variable
    }

    struct User {
        string name;
        string email;
    }

    mapping(address => User) public users;
    mapping(address => Purchase[]) public userPurchases;

    event PurchaseRecorded(address indexed userAddress, string itemName, uint256 itemPrice, uint256 purchasedTime, uint256 assetId); // Updated event

    function registerUser(string memory _name, string memory _email) public {
        require(bytes(_name).length > 0 && bytes(_email).length > 0, "Name and email are required");
        require(bytes(users[msg.sender].name).length == 0, "User already registered");

        users[msg.sender] = User(_name, _email);
    }

    function recordPurchase(string memory _itemName, uint256 _itemPrice, uint256 _assetId) public {
        require(bytes(_itemName).length > 0, "Item name is required");
        require(_itemPrice > 0, "Item price must be greater than zero");
        require(bytes(users[msg.sender].name).length > 0, "User must be registered");

        uint256 purchasedTime = block.timestamp;
        Purchase memory newPurchase = Purchase(_itemName, _itemPrice, purchasedTime, _assetId); // Updated Purchase struct
        userPurchases[msg.sender].push(newPurchase);

        emit PurchaseRecorded(msg.sender, _itemName, _itemPrice, purchasedTime, _assetId); // Updated event
    }

    function getUserPurchaseCount() public view returns (uint256) {
        return userPurchases[msg.sender].length;
    }

    function getUserPurchasesByTimeRange(uint256 startTime, uint256 endTime) public view returns (string[] memory, uint256[] memory, uint256[] memory, uint256[] memory) { // Updated return values
        require(startTime <= endTime, "Invalid time range");

        uint256 purchaseCount = userPurchases[msg.sender].length;
        string[] memory itemNames = new string[](purchaseCount);
        uint256[] memory itemPrices = new uint256[](purchaseCount);
        uint256[] memory purchaseTimes = new uint256[](purchaseCount);
        uint256[] memory assetIds = new uint256[](purchaseCount); // New array for assetIds

        for (uint256 i = 0; i < purchaseCount; i++) {
            Purchase memory purchase = userPurchases[msg.sender][i];
            if (purchase.purchasedTime >= startTime && purchase.purchasedTime <= endTime) {
                itemNames[i] = purchase.itemName;
                itemPrices[i] = purchase.itemPrice;
                purchaseTimes[i] = purchase.purchasedTime;
                assetIds[i] = purchase.assetId; // Store assetId
            }
        }




        return (itemNames, itemPrices, purchaseTimes, assetIds); // Updated return values
    }


}
