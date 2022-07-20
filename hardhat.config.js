require("@nomiclabs/hardhat-waffle")
require("hardhat-gas-reporter")
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config()
require("solidity-coverage")
require("hardhat-deploy")
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const PRIVATE_KEY = process.env.PRIVATE_KEY //|| "2057e98f48d0aa1180ee285115a3f276aaaf83875e072363202017e12074b0cf"
const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL // || "wss://eth-rinkeby.alchemyapi.io/v2/hyvm7hEfXT1i5Zw0j24P2MiWXmORiWL7"
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY // || "3EJWK1T55MRRX7QXF9YQ6GFVKG661Q6RSR"

module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 31337,
            // gasPrice: 130000000000,
        },
        rinkeby: {
            url: RINKEBY_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 4,
            blockConfirmations: 6,
        },
    },
    solidity: {
        compilers: [
            {
                version: "0.8.8",
            },
            {
                version: "0.6.6",
            },
        ],
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    gasReporter: {
        enabled: true,
        currency: "USD",
        outputFile: "gas-report.txt",
        noColors: true,
        //coinmarketcap: COINMARKETCAP_API_KEY,
    },
    namedAccounts: {
        deployer: {
            default: 0, // here this will by default take the first account as deployer
            1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
        },
    },
}

// const PRIVATE_KEY = process.env.PRIVATE_KEY
// const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL
// const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY
// const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
