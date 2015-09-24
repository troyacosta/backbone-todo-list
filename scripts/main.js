'use strict';
var $ = require('jquery');
var TodoListCollection = require('./collections/TodoListCollection');
var TodoListModel = require('./models/TodoListModel.js');
var _ = require('backbone/node_modules/underscore');

$(document).ready(function() {

	var $input = $('#input');
	var $form = $('#form');
	var $compiledList = $('#compiledList');
	var listTemplate = _.template($('#list-row').html());

	var listItems = new TodoListCollection();

	$form.submit(function(e){
		e.preventDefault();
		listItems.add({
			info: $input.val()
		});
	});

	listItems.on('add', function(newItem) {
		newItem.save();
		$input = $input.val('');
		var newHTML = listTemplate(newItem.toJSON());
		$compiledList.append(newHTML);
	});
	listItems.fetch();

});