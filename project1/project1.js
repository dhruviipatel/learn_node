const http = require('http')
const fs = require('fs')
const url = require('url')
const path = require('path')
const express = require('express')
const app = express()
const port = 1212
const users = require('./MOCK_DATA.json')

// http.createServer((req, res) => {
//     const path1 = req.url
//     if (path1 == '/') {
//         //here I got path using path module
//         const filePath = path.join(__dirname, 'view', 'home.html');
//         console.log('home page');
//         res.writeHead(200, { 'content-type': 'text/html' });
//         const homefile = fs.readFileSync(filePath, 'utf8');
//         res.write(homefile);
//         res.end();

//     } else if (path1 == '/about') {
//         //get path without using path module
//         console.log('about page');
//         res.writeHead(200, { 'content-type': 'text/html' });
//         const filecontent = fs.readFileSync('./project1/view/about.html', 'utf8');
//         res.write(filecontent);
//         res.end();
//     } else if (path1 == '/services') {
//         console.log('service page')
//         res.writeHead(200, { 'content-type': 'text/html' });
//         const servicecontent = fs.readFileSync('./project1/view/services.html');
//         res.write(servicecontent);
//         res.end();
//     }



// }).listen(1212);

app.get("/app/users", (req, res) => {
    return res.json(users)
})

app.get("/users", (req, res) => {
    res.writeHead(200, { 'context-type': 'text/html' });
    // const filecontent = fs.readFileSync('./')
})

app.get("/", (req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' });
    const filecontent = fs.readFileSync('./project1/view/home.html', 'utf8');
    res.write(filecontent);
    res.end();
})

app.get("/about", (req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' });
    const filecontent = fs.readFileSync('./project1/view/about.html', 'utf8');
    res.write(filecontent);
    res.end();
})

app.get("/services", (req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' });
    const filecontent = fs.readFileSync('./project1/view/services.html', 'utf8');
    res.write(filecontent);
    res.end();
})

app.listen(port, () => console.log('server started'))


