const { hre, ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log(`deploying contract with an account ${deployer.address}`);
  const Crowdfunding = await ethers.getContractFactory("crowdfunding");
  const crowdfunding = await Crowdfunding.deploy(
    "1000000000000000000",
    "100000",
    "1000000000000000"
  );

  console.log(
    "deployed contract with an address",
    await crowdfunding.getAddress()
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// 0xEE96FB8a90CDE167Ca74F46A9560aEF5757BeF5c
