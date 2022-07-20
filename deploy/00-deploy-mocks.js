const { network } = require("hardhat")
const {
    developmentChains,
    DECIMALS,
    INITIAL_ANSWER,
} = require("../helper-hardhat-config")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments //pulling these functions out of the deployments object
    const { deployer } = await getNamedAccounts() // getting the name of the account from getNamedAccounts function

    if (developmentChains.includes(network.name)) {
        log("Local network detected! Deploying mocks..")

        await deploy("MockV3Aggregator", {
            contract: "MockV3Aggregator",
            from: deployer,
            log: true,
            args: [DECIMALS, INITIAL_ANSWER],
        })
        log("Mocks Deployed!!")
        log("-------------------------------------------")

        log(process.env.RINKEBY_RPC_URL)
    }
}

module.exports.tags = ["all", "mocks"]
