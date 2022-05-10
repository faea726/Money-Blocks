/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-etherscan');

const TEST_PRIVATE_KEY = "039d17fedb3da5634bc09a7242c8be5d25f74eb3bdd7287ef8dc9e7e5defc0ec";
const MAIN_PRIVATE_KEY = "039d17fedb3da5634bc09a7242c8be5d25f74eb3bdd7287ef8dc9e7e5defc0ec";

module.exports = {
  solidity: "0.8.9",

  networks: {
    hardhat: {
      // forking: { // ETH
      //   url: "https://speedy-nodes-nyc.moralis.io/02d38cf0e25023b81c6c413b/eth/mainnet/archive",
      //   blockNumber: 14729000
      // }
      forking: { // BSC
        url: "https://speedy-nodes-nyc.moralis.io/02d38cf0e25023b81c6c413b/bsc/mainnet/archive",
        blockNumber: 17612800
      }
    },

    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      accounts: [`${TEST_PRIVATE_KEY}`]
    },

    mainnet: {
      url: "https://bsc-dataseed.binance.org/",
      accounts: [`${MAIN_PRIVATE_KEY}`]
    },
  },

  etherscan: {
    apiKey: "CA4I2KN4V9JET69YW2V5X3X3ZYWF8SDNEC"
  }
};
