var sys = require('sys'),
	http = require('http');
	http.createServer(function (req, res){

		switch (req.url)
			case '/myaction':
				res.end(?????);
				break;

	}).listen(8080)