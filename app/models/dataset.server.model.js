'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var maxSize = [1000000, 'The value of `{PATH}` ({VALUE}) exceeds the limit ({MAX}).'];

/**
 * Dataset Schema
 */
var DatasetSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Dataset name',
		trim: true
	},
	description: {
		type: String,
		default: '',
		required: 'Please fill Dataset description',
		trim: true
	},
	size: {
		type: Number,
		max: maxSize
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Dataset', DatasetSchema);
