
// Transaction Get on BLockchain 
require("dotenv").config({ path: __dirname + '/.env' });
var ethers =require('ethers');

const INFURA_API_URL = process.env.INFURA_API_URL;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const CONTRACT_ABI = require('../artifacts/contracts/STUDENT.sol/studentRollNo.json');

let customHttpProvider = new ethers.providers.JsonRpcProvider(INFURA_API_URL);

async function Get(){
    let contract = new ethers.Contract(CONTRACT_ADDRESS,CONTRACT_ABI.abi,customHttpProvider);

    var GET =await contract.allStudent();
    console.log(GET.toString())
    console.log('TX is completed')

}
Get()