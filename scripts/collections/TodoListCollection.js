var Backbone = require('backbone');
var TodoListModel = require('../models/TodoListModel');
module.exports = Backbone.Collection.extend({
	model: TodoListModel,
	url: 'http://tiyfe.herokuapp.com/collections/troy-backbone-todo'
});