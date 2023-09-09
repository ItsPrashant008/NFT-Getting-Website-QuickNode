import { ethers } from "hardhat";

async function main() {
  const Token = await ethers.getContractFactory("ERC721Token");
  const token = await Token.deploy();
 
  console.log("Token Address-> ", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log("Deploy error-> ", error);
    process.exit(1);
  });




// https://gateway.pinata.cloud/ipfs/QmVRrkXzbQuMsAKxYnKGNc6CAuxk2x5S4gWqdt2nua3Ziu

// Contract Address: 0x8F45562d1284E349b27333F03c0e98A1A926DcAc
// https://mumbai.polygonscan.com/address/0x8F45562d1284E349b27333F03c0e98A1A926DcAc#code

// Sepolia
// https://sepolia.etherscan.io/address/0x3412Cd3Ef8767f68D7A899Dd5D165D3988b99924#code