import { BigNumber } from "ethers";
import { ethers } from "hardhat";
import { Delegate__factory } from "../typechain/factories/Exercise6/Delegate.sol/Delegate__factory"
import { Delegation__factory } from "../typechain/factories/Exercise6/Delegate.sol/Delegation__factory"
import { addEmitHelpers } from "typescript";


async function main() {

  const [addr1,addr2] = await ethers.getSigners();
  console.log("adresse1:"+ addr1.address);

//   //1ERE PARTIE Deploiement des contrats
//   const Delegate = await ethers.getContractFactory("Delegate");
//   const delegate = await Delegate.deploy(addr2.address);
//   await delegate.deployed();
//   console.log("contrat delegate deployé:"+ delegate.address + " avec l'adresse du wallet :" + await delegate.owner());
//   //0x6Cd98310512eE37a13c1FE291e4E3395c02E22bC

//   const Delegation = await ethers.getContractFactory("Delegation");
//   const delegation = await Delegation.deploy(addr2.address);
//   await delegation.deployed();
//   console.log("contrat délégation deployé:"+ delegation.address + " avec l'adresse du wallet :" + await delegate.owner());
//   //0x5869CB8b407EeEBDC15D40CbEDc4C788b7e43757

  const delegateAddress = '0x6Cd98310512eE37a13c1FE291e4E3395c02E22bC';
  const delegateContract = Delegate__factory.connect(delegateAddress, addr1);

  const delegationAddress = '0x6Cd98310512eE37a13c1FE291e4E3395c02E22bC';
  const delegationContract = Delegate__factory.connect(delegationAddress, addr1);




}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
