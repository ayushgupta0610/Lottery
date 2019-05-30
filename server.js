var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Lottery app is temporarily unavailable.');
});

app.get('/revoke/:uin/:agencyID', function(req, res) {
	let result = {
		'uin': req.params.uin,
		'agencyID': req.params.agencyID
	}
	let resJson = JSON.stringify(result);
	res.send(resJson);
	 
//	res.send({ "some": "json" });
//	res.send(404, 'No params here');
//	res.send(500, { error: 'you blew it' });
//	res.send(200);
});

app.get('/announceWinner/:program/:roundNo', function(req, res) {
	let result = {
		'programNameAndRound': req.params.program + "+" + req.params.roundNo
		// 'roundNo': req.params.roundNo
	}
	let resJson = JSON.stringify(result);
	res.send(resJson);
});

app.listen(process.env.PORT || 3001);
console.log(`Server is now listening...`);