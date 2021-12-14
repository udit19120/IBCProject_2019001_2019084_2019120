const HDWalletProvider= require('@truffle/hdwallet-provider');
const Web3= require('web3');
const {interface, bytecode}=require('./compile')

const provider= new HDWalletProvider(
    'virus syrup elbow smile shift artwork beach festival quit scorpion middle wire',
    'https://rinkeby.infura.io/v3/f0600607cc3d4db289172f395df84d17'
);

const web3= new Web3(provider);

let result
let accounts
const deploy= async()=>{
    accounts= await web3.eth.getAccounts();

    console.log("Deploying from contract from account: ",accounts[0]);

    result=await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: bytecode})
    .send({from: accounts[0], gas:'10000000'});

    console.log(interface);
    console.log("Contract deployed to ", result.options.address);
    provider.engine.stop();
};

deploy();
// updateMessage();