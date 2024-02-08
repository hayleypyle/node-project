
const http = require('http')
const fs = require('fs')
const _ = require('lodash')

const server = http.createServer((req, res)=>{

    console.log(req.url, req.method)

    res.setHeader('Content-Type', 'text/html');

    let path = './src/views';
    switch(req.url){
        case "/":
            path += "/index.html";
            res.statusCode = 200;
            break;

        case "/contact":
            path += "/contact.html";
            res.statusCode = 200;
            break;
        
        default:
            path += "/404.html";
            res.statusCode = 404;
            break;
    }
    fs.readFile(path, (err, data)=>{
        res.end(data);

    })


})

server.listen(3001, 'localhost', () => {

    console.log('Listening for Request on port 3001')
})

