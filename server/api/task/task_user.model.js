'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskUserSchema = new Schema({
});

module.exports = mongoose.model('TaskUser', TaskUserSchema);

