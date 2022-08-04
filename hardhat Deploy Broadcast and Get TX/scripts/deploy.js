
const hre = require("hardhat");

async function main() {
  const Student = await hre.ethers.getContractFactory('studentRollNo');
  const std = await Student.deploy();

  await std.deployed();

  console.log("My student contract deployed to :", std.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
