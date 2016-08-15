var Record = require('../models').Record;
var jwt = require('jwt-simple');

module.exports = {
	getAllRecords: function(req, res) {
		Record.findAll()
		.then(function(records) {
			res.json(records);
		});
	},
	addRecord: function(req, res) {
		Record.create({
			social:  req.body['Social'],
			preservation:  req.body['Preservation'],
			sensoryDisturbance:  req.body['Sensory Disturbance'],
			communicationAndDevelopment:  req.body['Communication and Development'],
			attentionAndSafety:  req.body['Attention and Safety']
		})
		.then(function(record) {
			res.json(record);
		});
	}
}
