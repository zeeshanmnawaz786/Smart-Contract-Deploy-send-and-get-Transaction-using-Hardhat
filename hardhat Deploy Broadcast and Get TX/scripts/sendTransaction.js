// Transaction set on BLockchain 
require("dotenv").config({ path: __dirname + '/.env' });
var ethers =require('ethers');

const INFURA_API_URL = process.env.INFURA_API_URL;
var PRIVATE_KEY= process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const CONTRACT_ABI = require('../artifacts/contracts/STUDENT.sol/studentRollNo.json');

let customHttpProvider = new ethers.providers.JsonRpcProvider(INFURA_API_URL);

async function set(Id,_name, _fatherName){
    let wallet= new ethers.Wallet(PRIVATE_KEY, customHttpProvider);
    let signer = new ethers.Contract(CONTRACT_ADDRESS,CONTRACT_ABI.abi,wallet);

    var SET =await signer.addStudentData(Id,_name, _fatherName);
    console.log(SET)
    console.log('TX is completed')

}
set(1,"Adnan","Nawaz")




// Transaction Get on BLockchain 

































