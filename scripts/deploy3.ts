import { ethers } from "hardhat";


async function main() {

  const [addr1] = await ethers.getSigners();
  console.log("adresse1:"+ addr1.address);

  //1ERE PARTIE
  // const CoinFlip = await ethers.getContractFactory("CoinFlip");
  // const coinFlip = await CoinFlip.deploy();
  // await coinFlip.deployed();
  // console.log(`deployed to ${coinFlip.address}`);

  //2EME PARTIE
  const CoinFlipHack = await ethers.getContractFactory("CoinFlipHack");
  const coinFlipHack = await CoinFlipHack.deploy();
  await coinFlipHack.deployed();
  console.log(`deployed to ${coinFlipHack.address}`);
  await coinFlipHack.flip();//x10



  const deployedAddress = '0x7E2310434935c02a5fF64029A5CD004668B76e0d';
  const CoinFlip = await ethers.getContractFactory("CoinFlip");
  const coinFlip = await CoinFlip.attach(deployedAddress);
  console.log(await coinFlip.consecutiveWins());

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
