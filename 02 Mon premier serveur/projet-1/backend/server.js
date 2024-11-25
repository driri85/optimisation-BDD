const http = require('http');

const server = http.createServer((req, res) => {
    res.end('bonjour je suis le serveur !');
});

server.listen(process.env.PORT || 3000);