require("@nomiclabs/hardhat-waffle")

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/rdcswMY5XNE1owOTSi-ufCjlzRDm2Y3i",
      accounts: [
        "4e67fd82bc75e3a8d06adb90bc58ef618e8e01b0bbef6285f7a660945ab96860",
      ],
    },
  },
}
