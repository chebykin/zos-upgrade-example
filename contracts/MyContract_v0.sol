pragma solidity ^0.4.21;

import "zos-lib/contracts/migrations/Initializable.sol";
// just to make it includable in tests:
import "zos-lib/contracts/upgradeability/AdminUpgradeabilityProxy.sol";


contract MyContract_v0 is Initializable {
  uint256 public value;

  function initialize(uint256 _value) isInitializer public {
    value = _value;
  }
}
