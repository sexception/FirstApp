process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express_config');

var app = express();
app.listen(3000);
module.exports = app;

console.log('서버 시작123456789');
