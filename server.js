var http = require('http');
var url = require('url');

var server = new http.Server();

var DOMModel = {
	tag: "div",
	content: [
		{
			tag: "span",
			attributes: { style: "color: red" },
			content: [{ text: "Enter value:" }]
		},
		{
			tag: "input",
			attributes: {
				type: "text",
				value: "test",
				style: "color: green"
			}
		}
	]
}

server.listen(1337, '127.0.0.1');

server.on('request', function(req, res) {
	console.log( req.method, req.url );

	res.setHeader('Content-Type', 'application/json');
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.end(JSON.stringify(DOMModel));
});