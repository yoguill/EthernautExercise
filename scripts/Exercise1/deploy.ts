import { ethers } from "hardhat";

async function main() {
  const Etherstore = await ethers.getContractFactory("EtherStore");
  const etherstore = await Etherstore.deploy();
  await etherstore.deployed();
  console.log(`deployed to ${etherstore.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
