var Backbone = require('backbone');
var TodoListModel = require('../models/TodoListModel');
module.exports = Backbone.Collection.extend({
	model: TodoListModel
});