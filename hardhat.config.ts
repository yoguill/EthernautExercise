import "@nomicfoundation/hardhat-toolbox";

import { resolve } from "path";
import { config as dotenvConfig } from "dotenv";
dotenvConfig({ path: resolve(__dirname, "./.env") });

module.exports = {
  solidity:{
    compilers: [
      {
        version: "0.5.17",
      },
      {
        version: "0.6.8",
        settings: {},
      },
    ],
  },
  networks: {
    hardhat: {
      forking: {
        url: process.env.RINKEBY_URL,
      }
    },
    rinkeby: {
      url: process.env.RINKEBY_URL || "",
      accounts:
        process.env.PRIVATE_KEY_01 !== undefined ? [process.env.PRIVATE_KEY_01,process.env.PRIVATE_KEY_02] : [],
        gas: 8000000,
        gasPrice: 30000000000,
    },
    ropsten:{
      url: process.env.ROPSTEN_URL || "",
      accounts:
        process.env.PRIVATE_KEY_01 !== undefined ? [process.env.PRIVATE_KEY_01,process.env.PRIVATE_KEY_02] : [],
    },
    goerli:{
      url: process.env.GOERLI_URL || "",
      accounts:
        process.env.PRIVATE_KEY_01 !== undefined ? [process.env.PRIVATE_KEY_01,process.env.PRIVATE_KEY_02] : [],
    },
    Matictest:{
      url: process.env.MATIC_URL_TESTNET || "",
      accounts:
        process.env.PRIVATE_KEY_01 !== undefined ? [process.env.PRIVATE_KEY_01,process.env.PRIVATE_KEY_02] : [],
    },
    MaticProd:{
      url: process.env.MATIC_URL_PROD || "",
      accounts:
        process.env.PRIVATE_KEY_01 !== undefined ? [process.env.PRIVATE_KEY_01,process.env.PRIVATE_KEY_02] : [],
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  paths: {
    artifacts: "./artifacts",
    cache: "./cache",
    sources: "./contracts",
    tests: "./test",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  typechain: {
    outDir: "typechain",
    target: "ethers-v5",
  },
};
