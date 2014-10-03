'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  title: String,
  description: String,
  points: Number,
  _week: { type: Schema.Types.ObjectId, ref: "Week"}
});

module.exports = mongoose.model('Task', TaskSchema);
