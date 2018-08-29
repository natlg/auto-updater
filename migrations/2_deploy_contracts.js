"use strict";

const SimpleOperations = artifacts.require("./SimpleOperations.sol");
const OperationsProxy = artifacts.require("./OperationsProxy.sol");

module.exports = deployer => {
  deployer.deploy(SimpleOperations)
  .then(() => console.log("SimpleOperations address: " + SimpleOperations.address));

  deployer.deploy(OperationsProxy,
    "0x.. master key ", //    _owner,
    "0x.. server key ", //    _stable,
    "0x.. server key", //    _beta,
    "0x.. server key", //    _nightly,
    "0x.. manual key", //    _stableConfirmer,
    "0x.. manual key", //    _betaConfirmer,
    null, //  _nightlyConfirmer,
    "0x.. address of operations contract")
    .then(() => console.log("OperationsProxy address: " + OperationsProxy.address))
};
