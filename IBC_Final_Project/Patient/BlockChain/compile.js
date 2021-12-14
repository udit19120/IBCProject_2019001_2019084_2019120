const path=require('path');
const fs=require('fs');
const solc=require('solc');

const patientPath=path.resolve(__dirname,'Contracts','Patient.sol');

const source=fs.readFileSync(patientPath,'utf-8');

module.exports =solc.compile(source,1).contracts[':Patient'];