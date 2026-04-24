const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.params);
    console.log(req.body);
    console.log(req.query);


    if (req.url === '/' && req.method === 'GET') {
        res.setHeader('Content-Type', 'text/plain');
        res.statusCode = 200;
        res.end('Welcome home');
    }
    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-type': 'text/plain' });
        res.end('About');
    }
    else if (req.url === '/echo' && req.method === 'POST') {
        let body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log('Received Body:', parsedBody);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(`this is body:${parsedBody}`);
        });
    }
    else {
        res.writeHead(404);
        res.end('Not Found');
    }
});
server.listen(5000, () => {
    console.log('Server running on port 5000');
});