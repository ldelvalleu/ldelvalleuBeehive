var http = require('http');
var url = require('url');
var dataManager = require('./managers/dataManager');
var router = require('./routers/router');

var port = 3000;
var hostname = 'localhost';

var server = http.createServer((request, response) => {

    var parseUrl = url.parse(request.url, true);
    var path = parseUrl.pathname;
    path = path.replace(/^\/+|\/+$/g, '');
    var method = request.method;
    var query = parseUrl.query;
    var headers = request.headers;

    setResponseHeaders(request, response);

    if (method == 'OPTIONS') {
        respondToOptions(request, response);
    } else {
        router.process(request, response, method, path, query, dataManager);
    }
});

server.listen(port, hostname, () => {
    console.log('Server running on port:', port);
});

function respondToOptions(request, response) {
    setResponseHeaders(request, response);
    response.writeHead(200);
    response.end();
}

function setResponseHeaders(request, response) {

    var origin = '*';
    if (request.headers['origin']) {
        origin = request.headers['origin'];
    }

    response.setHeader('Access-Control-Allow-Origin', origin);
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');

    if (request.headers['content-type']) {
        response.setHeader('Content-Type', request.headers['content-type'])
    }

    response.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin, Access-Control-Allow-Methods, Content-Type');
}

function send404(request, response) {
    setResponseHeaders(request, response);
    response.writeHead(404, {
        'Content-Type': 'application/json'
    });
    response.end();
}