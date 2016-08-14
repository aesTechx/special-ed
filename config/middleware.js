var bodyParser = require('body-parser');
var cors = require('cors');
var morgan = require('morgan');

module.exports = function ( app, express ) {
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  //Enable cross-orgin access
  app.use(cors());
  app.use(morgan('dev'));
  app.use(express.static('frontend'));
  app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
  });
};
