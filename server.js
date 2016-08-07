var express 	= require('express');
var app 		= express();
var server 		= require('http').createServer(app);
var io 			= require('socket.io')(server);
var models 		= require('./app/models');

var PORT = process.env.port || 8000;

require ('./config/middleware.js')(app, express);
require ('./config/routes.js')(app, express);
require ('./config/socket.handler.js');

app.use(express.static('frontend/www'));

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

models.sequelize.sync().then(function () {
	app.listen(PORT, function serverListen() {
		console.log('Listening on port ' + PORT);
	});
 }).catch(function(err) {
 	console.log("catch");
	app.listen(PORT, function serverListen() {
		console.log('Listening on port ' + PORT);
	});
 });

//On crash
app.on ( 'uncaughtException', function () {
	//Close connection
	server.close();
});

// On kill
app.on('SIGTERM', function() {
	server.close();
});

//On exit
app.on('exit', function() {
	server.close();
});

module.exports = app;

