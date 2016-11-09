'use strict';

let http = require('http');

let server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello Http');
    // console.log('Server Started ....');
});

let req = http.request(options);
req.end();
req.on('connect', (res, socket, head) => {
    console.log('got connected!');
});
server.listen(8080);
