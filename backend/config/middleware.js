var bodyParser = require('body-parser');
var cors = require('cors');
var morgan = require('morgan');

	
module.exports = function ( app, express ) {
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	//Enable cross-orgin access
	app.use(cors());
	app.use(morgan('dev'));
};
