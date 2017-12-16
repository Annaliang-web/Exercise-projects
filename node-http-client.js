//https.get() method
const https = require('https');
const request = https.get('https://www.azlyrics.com/lyrics/beck/bluemoon.html',(response)=>{
    let body = "";
    response.on('data', (body) =>{
        body += chunk;
    });
    response.on('end', ()=>{
        if(response.statusCode === 200){
            try {
                console.log(body);
            }catch(e){
                console.log('Error!');
            }
        }
    })
})
//node node-http-client.js
//curl https://www.google.ca/
