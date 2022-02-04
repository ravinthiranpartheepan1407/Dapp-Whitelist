const hre = require("hardhat");

async function main() {

  const whiteListContract = await ethers.getContractFactory("Whitelist");
  const deployedWhiteListContract = await whiteListContract.deploy(20);
  await deployedWhiteListContract.deployed();

  console.log("Whitelist Contract Address", deployedWhiteListContract.address);

}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
