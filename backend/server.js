var express 	= require('express');
var app 		= express();
var server 		= require('http').createServer(app);
var io 			= require('socket.io')(server);
var models 		= require('./app/models');

var PORT = process.env.port || 8080;

require ('./config/middleware.js');
require ('./config/routes.js');
require ('./config/socket.handler.js');

models.sequelize.sync().then(function () {
	server.listen(PORT, function serverListen() {
		console.log('Listening on port' + PORT);
	})
})

//On crash
app.on('uncaughtException', function(){
	//Close connection
	server.close();
})

// On kill
app.on('SIGTERM', function(){
	server.close();
})

//On exit
app.on('exit', function(){
	server.close();
})

module.exports = app;

