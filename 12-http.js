const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to pur home page')
        return;
    }
    if (req.url === '/about') {
        res.end('Here is out short history');
        return
    }

    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you're looking for</p>
        <a href ="/">back home</a>
        `)

});

server.listen(5000)