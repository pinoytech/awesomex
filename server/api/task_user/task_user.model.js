'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskUserSchema = new Schema({
  _task: { type: Schema.Types.ObjectId, ref: "Task"},
  _user: { type: Schema.Types.ObjectId, ref: "User"},
  checked: Boolean
});

module.exports = mongoose.model('TaskUser', TaskUserSchema);
