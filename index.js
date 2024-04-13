

//var thisfuc = require('./app');
//thisfuc("function1");

//path module---------------------
// const mypath = require('path');
// var objectPath = mypath.parse(__filename);
// console.log(objectPath);


//OS module-------------------------
// const myos = require('os');
// var freememory = myos.freemem();
// var total = myos.totalmem();
// console.log(freememory);
// console.log(total);





//event module------------------------
// const thisClass = require('./app');
// const class1 = new thisClass();

// class1.on('message', (args) => {
//     console.log('eveent registerd', args)
// });
// class1.myfunc("function1");


//http module------------------------

const http = require('http');


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write('<h1>Hello js</h1>')
        res.write('<h2>Dhruvi Patel</h2>')
        res.write('<button>Click me</button>')

        res.end('ok by by');
    }

    if (req.url === '/api/list') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
}).listen(3333);


// server.on('connection', (socket) => {
//     console.log('New Connection');
// })//in console print message
//server.listen(3333);
console.log("Listening on port 3333");





