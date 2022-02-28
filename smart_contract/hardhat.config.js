require("@nomiclabs/hardhat-waffle");

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url:'https://eth-rinkeby.alchemyapi.io/v2/MulBQ87euQsBcKqsfSC8LpS7CVDv7XsL',
      accounts: [
        'd05268cb287621c3834e4d28c7e20ba30ff56ebb7e9172981dab658a9ffaadc2',
      ]
    }
  }
};
