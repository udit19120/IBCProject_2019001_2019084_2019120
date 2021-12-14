const path=require('path');
const fs=require('fs');
const solc=require('solc');

const hospitalPath=path.resolve(__dirname,'Contracts','Hospital.sol');

const source=fs.readFileSync(hospitalPath,'utf-8');

module.exports =solc.compile(source,1).contracts[':Hospital'];