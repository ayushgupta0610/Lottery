var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Return JSON or HTML View');
});

app.get('/revoke/:uin/:agencyID', function(req, res) {
	res.send(`{"uin": ${req.params.uin},"agencyID": ${req.params.agencyID}}`);
	 
//	res.send({ "some": "json" });
//	res.send(404, 'No params here');
//	res.send(500, { error: 'you blew it' });
//	res.send(200);
});

app.listen(process.env.PORT || 3001);
console.log(`Server is now listening...`);