import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const deployerPrivateKey = process.env.PRIVATE_KEY || "";
const providerApiKey =
  process.env.ALCHEMY_API_KEY || "oKxs-03sij-U_N0iOlrSsZFr29-IqbuF";

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  defaultNetwork: "localhost",
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
};

export default config;
