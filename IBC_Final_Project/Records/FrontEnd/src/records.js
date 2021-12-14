import web3 from './web3';

const address='0x8C3ea8764E7a310f83fA846D7BEEE4dB3e29b2a0';

const abi=[{"constant":true,"inputs":[{"name":"r__id","type":"string"}],"name":"getRecordDiag","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type"
:"function"},{"constant":true,"inputs":[],"name":"r_owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":
false,"inputs":[{"name":"r__id","type":"string"},{"name":"p__id","type":"string"},{"name":"d__id","type":"string"},{"name":"_pers_hist","type":"string"},{"name":"_issue","type":"string"},{"name":"_visits","type":"string"},{"name":"_diag","type":"string"},{"name":"_startDate","type":"string"}],"name":"addRecord","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"r__id","type":"string"}],"name":"getRecordHist","outputs":[{"name":"","type":"string"}],
"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"r__id","type":"string"}],"name":"getRecordIssue","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];

export default new web3.eth.Contract(abi,address);