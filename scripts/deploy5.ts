import { BigNumber } from "ethers";
import { ethers } from "hardhat";
import { Token__factory } from "../typechain/factories/Exercise5/Token__factory"
import { addEmitHelpers } from "typescript";


async function main() {

  const [addr1,addr2] = await ethers.getSigners();
  console.log("adresse1:"+ addr1.address);

  // //1ERE PARTIE
  const Token = await ethers.getContractFactory("Token");
  const token = await Token.deploy(20);
  await token.deployed();
  console.log(`token deployed to ${token.address}`);
  console.log(await token.balanceOf(addr1.address));

  //2Eme PARTIE
  const TokenHack = await ethers.getContractFactory("TokenHack");
  const tokenhack = await TokenHack.deploy(token.address);
  await tokenhack.deployed();
  console.log(`hack deployed to ${tokenhack.address}`);
  console.log(await tokenhack.originalContract());

  await tokenhack.transfer();
  console.log(await token.balanceOf(addr1.address));

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
