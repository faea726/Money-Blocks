/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('@nomiclabs/hardhat-waffle');
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
  }
};
