const http = require('http');
const url = require('url');

const downloader = require('./downloader');

const hostname = '127.0.0.1';
const port = 3000;

const requestListener = function (req, res) {
    const query = url.parse(req.url, true).query;

    res.setHeader("Content-Type", "application/json");
    try {
        downloader.save(query.url);
        res.writeHead(200);
        res.end(JSON.stringify({
            url: query.url,
            tsl: 'downloaded'
        }));
    } catch (error) {
        res.writeHead(400);
        res.end(JSON.stringify({
            message: 'Request error',
            tsl: 'error'
        }));
    }
};

const server = http.createServer(requestListener);

server.listen(port, hostname, (error) => {
    if(!error)
        console.log(`Server running at http://${hostname}:${port}/`);
    else
        console.log("Error server running =(");
});
