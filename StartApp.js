var express = require('./config/express_config');
var app = express();

/*app.use('/', function(req, res) {
	res.send('Hello World');
});*/

app.listen(3000);
module.exports = app;

console.log('서버 시작');