let http = require('http'),
	url = require('url'),
	server = new http.Server();

let getModule = function (urlPath) {
	switch (urlPath) {
		case '/Ex1/': return require('./urls/Ex1.js');
		case '/Ex2/': return require('./urls/Ex2.js');
		case '/Ex3/': return require('./urls/Ex3.js');
		default: return require('./urls/Ex1.js');
	}
}

server.listen(1337, '127.0.0.1');

server.on('request', function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.end(JSON.stringify( getModule(req.url) ));
});