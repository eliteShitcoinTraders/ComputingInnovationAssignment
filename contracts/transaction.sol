// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Transaction {
    struct Purchase {
        string itemName;
        uint256 itemPrice;
        uint256 purchasedTime;
        uint256 assetId;
        string userName; // New field to store the user's name
        string userEmail; // New field to store the user's email
    }

    mapping(address => Purchase[]) public userPurchases;

    event PurchaseRecorded(address indexed userAddress, string itemName, uint256 itemPrice, uint256 purchasedTime, uint256 assetId, string userName, string userEmail);

    function recordPurchase(string memory _itemName, uint256 _itemPrice, uint256 _assetId, string memory _userName, string memory _userEmail) public payable {
        require(bytes(_itemName).length > 0, "Item name is required");
        require(_itemPrice > 0, "Item price must be greater than zero");
        require(bytes(_userName).length > 0 && bytes(_userEmail).length > 0, "User name and email are required");

        uint256 purchasedTime = block.timestamp;
        Purchase memory newPurchase = Purchase(_itemName, _itemPrice, purchasedTime, _assetId, _userName, _userEmail);
        userPurchases[msg.sender].push(newPurchase);

        emit PurchaseRecorded(msg.sender, _itemName, _itemPrice, purchasedTime, _assetId, _userName, _userEmail);
    }

    function getUserPurchaseCount() public view returns (uint256) {
        return userPurchases[msg.sender].length;
    }

    function getUserPurchaseData(uint256 startIndex, uint256 count) public view returns (string[] memory, uint256[] memory, uint256[] memory, uint256[] memory) {
        require(startIndex < userPurchases[msg.sender].length, "Invalid start index");

        uint256 endIndex = startIndex + count;
        if (endIndex > userPurchases[msg.sender].length) {
            endIndex = userPurchases[msg.sender].length;
        }

        string[] memory itemNames = new string[](count);
        uint256[] memory itemPrices = new uint256[](count);
        uint256[] memory purchaseTimes = new uint256[](count);
        uint256[] memory assetIds = new uint256[](count);

        for (uint256 i = startIndex; i < endIndex; i++) {
            Purchase memory purchase = userPurchases[msg.sender][i];
            itemNames[i - startIndex] = purchase.itemName;
            itemPrices[i - startIndex] = purchase.itemPrice;
            purchaseTimes[i - startIndex] = purchase.purchasedTime;
            assetIds[i - startIndex] = purchase.assetId;
        }

        return (itemNames, itemPrices, purchaseTimes, assetIds);
    }
}
