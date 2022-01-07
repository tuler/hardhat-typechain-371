import { task } from "hardhat/config";

// !!! Import generated code
import { Greeter__factory } from "../../typechain-types";

task("hello", "Say hello", async (taskArgs, hre) => {
  const { deployments, ethers } = hre;
  const [signer] = await ethers.getSigners();

  // get deployed contract (by hardhat-deploy)
  const Greeter = await deployments.get("Greeter");

  // connect using type hain
  const greeter = Greeter__factory.connect(Greeter.address, signer);

  // call contract
  const message = await greeter.greet();
  console.log(message);
});
