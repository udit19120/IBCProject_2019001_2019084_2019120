const path=require('path');
const fs=require('fs');
const solc=require('solc');

const recordPath=path.resolve(__dirname,'Contracts','Records.sol');

const source=fs.readFileSync(recordPath,'utf-8');

module.exports =solc.compile(source,1).contracts[':Records'];