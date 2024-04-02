// so this code is bringing
// express package from node_modules
// into server

const express = require('express') 
// express is a function

const server = express()

function started(){
    console.log('server started on 8888')
}
// google.com/
// google.com

// get function will ask you route
    // for base url you will keep it '/'

// it takes 2 things
// first is route
// second is function to handle that route

function handleBase(request,response){
    // response.send('this is base rout') to send normaly
    response.sendFile(__dirname+'/index.html')
}

// function handleSum(request,response){
//     const a = Number(request.query.a);
//     const b = Number(request.query.b);
//     const sum = a+b;
//     response.send(`sum is ${sum}`);
// }



server.get('/',handleBase);
// server.get('/sum',handleSum);


server.listen(8888,started)