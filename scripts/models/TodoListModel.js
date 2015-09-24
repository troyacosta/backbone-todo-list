var Backbone = require('backbone');
module.exports = Backbone.Model.extend({
	defaults: {
		info: 'list item'
	},
	urlRoot: 'http://tiyfe.herokuapp.com/collections/troy-backbone-todo',
	idAttribute: '_id'
});