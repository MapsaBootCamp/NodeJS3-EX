const fs = require('fs');
const http = require('http');

const server = new http.Server();
server.listen(3000);

server.on('request', (req, res) => {
    const data = fs.createReadStream('./largefile.txt', 'utf8');
    data.pipe(res);
})