//File I/O - read a file from a local computer in node environment

// const fs = require('fs'); //file system node

// // .readFile(,function());   asynchronous function
// fs.readFile('../../test.txt', 'utf8',
//   function(err,data){
//     if(err){
//       return console.log(err);
//     }
//     console.log(data);
//   });

//node fileSystem-node.js 




//==========================================================================================
//File I/O Streams  -- return same data as above program
const fs = require('fs');
let readableStream = fs.createReadStream('../../test.txt');
let writableStream = fs.createWriteStream('../../test2.txt');
let data = '';

readableStream.on('data',function (chunk) {
  data += chunk;
})
readableStream.on('end', function () {
  console.log(data);
});

//node fileSystem-node.js 





//==========================================================================================
//Streams - piping
// const fs = require('fs');
// let readableStream = fs.createReadStream('../../test.txt');
// let writableStream = fs.createWriteStream('../../test3.txt');

// readableStream.pipe(writableStream);
// //????????????
// const zlib = require('zlib');
// fs.createReadStream('input.txt.gz')
//   .pipe(zlib.createGunzip())
//   .pipe(fs.createWriteStream('output.txt'));