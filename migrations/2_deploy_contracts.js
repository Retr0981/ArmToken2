const ArmahToken = artifacts.require("armahToken");

module.exports = function(deployer) {
  deployer.deploy(ArmahToken, 1000000);
};
