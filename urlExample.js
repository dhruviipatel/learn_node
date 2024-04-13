const http = require('http')
const url = require('url')

http.createServer((req, res) => {
    console.log(req.url);
    const urlobject = url.parse(req.url, true);
    console.log(urlobject);
    console.log(urlobject.query.name);
}).listen(8080);