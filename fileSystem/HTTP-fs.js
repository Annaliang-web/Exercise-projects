const https = require('https');
const fs = require('fs');

const request = https.get('https://www.lyrics.com/', (response)=>{
  let body = "";
  response.on('data', (chunk)=>{
    body += chunk;
  });
  response.on('end',  ()=>{
    if(response.statusCode === 200){
      try{
        // console.log(body);
        fs.writeFile('lyrics.html', body, (err) => {
          if (err) throw err;
          console.log('File saved!');
        });
        console.log('body downloaded!');
      }catch(e){
        console.log('Error!');
      }
    }
  })
});



//example:
// fs.writeFile('message.txt', 'It\'s got to be perfect!',(err)=>{
//   if(err) throw err;
//   console.log('File saved!');
  
// });