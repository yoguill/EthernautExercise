import { ethers } from "hardhat";
import { TelephoneAttack__factory } from "../typechain-types/factories/Exercise4/TelephoneHack.sol/TelephoneAttack__factory"
import { Telephone__factory } from "../typechain-types/factories/Exercise4/Telephone__factory"
import { TelephoneAttack } from "../typechain-types";
import { expect } from "chai";

async function main() {
  const [addr1,addr2] = await ethers.getSigners();
  const deployedAddress = '0x5A8d9762EA03726CdBE5A3BE3b0661B28de04fc5';//contract Telephone on rinkeby
  const telephoneContract = Telephone__factory.connect(deployedAddress, addr1);
  console.log(await telephoneContract.owner());
  console.log(addr1.address);
  console.log(addr2.address);


  const hack = await ethers.getContractFactory("TelephoneAttack");
  const hackContract = await hack.deploy();
  await hackContract.deployed();
  console.log(`deployed to ${hackContract.address}`);

  //const hackContract: TelephoneAttack = await new TelephoneAttack__factory(addr1).deploy(deployedAddress);
  //await hackContract.deployed();
  //console.log("deployed :" + hackContract.address)
  await hackContract.changeOwner();

  const telephoneOwner: string = await telephoneContract.owner();
  console.log(telephoneOwner + " = " + addr1.address)
  expect(telephoneOwner).to.equal(addr1.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

