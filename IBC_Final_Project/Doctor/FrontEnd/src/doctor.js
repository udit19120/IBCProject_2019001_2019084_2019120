import web3 from './web3';

const address='0x18477a5d0698e93BCA63BC388a26130aAc391e4C';

const abi=[{"constant":false,"inputs":[{"name":"d_id","type":"string"},{"name":"d_name","type":"string"},{"name":"d_specialisation","type":"string"},{"name":"d_address","type":"string"},{"name":"d_number","type":"string"}],"name":"addDoctor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"manager","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"numDoctors","outputs"
:[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"d_id","type":"string"}],"name":"getName","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"d_id","type":"string"}],"name":"getSpecialisation","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"d_id","type":"string"}],
"name":"getNumber","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"d_id","type":"string"}],"name":"getD_Address","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];

export default new web3.eth.Contract(abi,address);