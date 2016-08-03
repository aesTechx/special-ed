var helpers = require('./helpers.js'); // our custom middleware
//TODO require event handlers (i.e. database controllers, api controllers, etc)

module.exports = function (app) {
	

	app.use(helpers.errorLogger);
	app.use(helpers.errorHandler);
}