require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: "0.8.17",
	networks: {
		goerli: {
			url: "https://eth-goerli.g.alchemy.com/v2/Lz73-AjKsGsriu3OYLULVeE1X6X9pIO2",
			accounts: [
				"f4111522e3a7f1a5b81a7c56a12a8b653b2af8ebdbf62a2ba2b6202a78d4fca2",
			],
		},
	},
};

//
