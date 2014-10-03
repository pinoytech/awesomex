'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  name: String,
  description: String,
  point: Number,
  task_users: [{ type: Schema.Types.ObjectId, ref: "TaskUser"}],
  _week: { type: Schema.Types.ObjectId, ref: "Week"}
});

module.exports = mongoose.model('Task', TaskSchema);
