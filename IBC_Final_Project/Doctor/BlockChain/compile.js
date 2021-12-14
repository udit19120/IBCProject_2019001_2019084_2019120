const path=require('path');
const fs=require('fs');
const solc=require('solc');

const doctorPath=path.resolve(__dirname,'Contracts','Doctor.sol');

const source=fs.readFileSync(doctorPath,'utf-8');

module.exports =solc.compile(source,1).contracts[':Doctor'];