//====================== Exrpess server ========================
//Create an Express server that has 3 routes: '/name', '/sum', '/color'
//For the name route, return your name to the client
//For the sum route, accept 3 numbers on the query string, 
//and return the sum of the 3 numbers. e.g.:
//http://localhost:3000/sum?a=3&b=6&c=1 would return 10 to the client
//Use req.query to access the numbers
//For the color route return the following JSON object to the client:
      //{
      //   red:0,
      //   green: 79,
      //   blue: 255
      // }
//=====================================================================
const express = require('express')
      app = express();

app.use(express.static('public'));      
// http://localhost:3000/expressServer.html

app.get('/name',(req,res)=>{
  res.send('<h2>Hello what?!</h2>'); //res.send() will display any content(strings only) on the page
});

//  http://localhost:3000/sum?a=3&b=6&c=9
app.get('/sum',(req,res)=>{
  // let sum = req.query.a + req.query.b + req.query.c;  //return 369
  let a = parseInt(req.query.a), //parse a string to an integer or use Number()
      b = parseInt(req.query.b),
      c = parseInt(req.query.c)
  let sum = a + b + c;    
  // res.send('' + sum); 
  // console.log(req.query.a);//string 3 from query
  // console.log(a); //number 3
  res.send(sum.toString()); //change numbers to string for the browser     
})

//  http://localhost:3000/search?q=I+need+some+coffee+XD
app.get('/search',(req,res)=>{
  res.send(req.query.q); //same as res.send(req.query.q.toString());
  console.log(req.query.q); 
});

// http://localhost:3000/color
app.get('/color', (req,res)=>{
  
  let color =  {
        red:0,
        green: 79,
        blue: 255
      }
  const json_color = JSON.stringify(color.green); 
  let colorCode = JSON.stringify(color);
  // res.send(colorCode);
  res.send('color code:' + json_color);
  
});


app.listen(3000, ()=>{
  console.log('port 3000 listening!');
  
});
      
//** 8080 port has a problem with ProgressQL
//nodemon ExpressJS.js 3000
//Use maxAge option to specify that these files are not cached for more than 2 days