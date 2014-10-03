'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var findOneOrCreate = require('mongoose-find-one-or-create');

var TaskUserSchema = new Schema({
  _task: { type: Schema.Types.ObjectId, ref: "Task"},
  _user: { type: Schema.Types.ObjectId, ref: "User"},
  checked: Boolean
});

TaskUserSchema.plugin(findOneOrCreate);
module.exports = mongoose.model('TaskUser', TaskUserSchema);
