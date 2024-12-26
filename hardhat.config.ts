import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-watcher";
import "@typechain/hardhat";
import "hardhat-deploy";
import "dotenv/config";

const deployerPrivateKey = process.env.PRIVATE_KEY || "";
const providerApiKey =
  process.env.ALCHEMY_API_KEY || "oKxs-03sij-U_N0iOlrSsZFr29-IqbuF";

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  defaultNetwork: "hardhat",
  namedAccounts: {
    deployer: {
      // By default, it will take the first Hardhat account as the deployer
      default: 0,
    },
  },
  networks: {
    hardhat: {
      forking: {
        url: `https://eth-mainnet.alchemyapi.io/v2/${providerApiKey}`,
        enabled: process.env.MAINNET_FORKING_ENABLED === "true",
      },
    },
    // sepolia: {
    //   url: `https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`,
    //   accounts: [deployerPrivateKey],
    // },
  },
  watcher: {
    compilation: { tasks: ["compile"], files: ["./contracts"], verbose: true },
  },
};

export default config;
