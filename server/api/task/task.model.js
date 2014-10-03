'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TaskSchema = new Schema({
  name: String,
  point: String,
  week_id: Number,
  description: String
});

module.exports = mongoose.model('Task', TaskSchema);