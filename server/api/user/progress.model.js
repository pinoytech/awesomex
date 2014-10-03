'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('mongo-relation');


var ProgressSchema = new Schema({
  tasks: [{ type: Schema.ObjectId, ref: "Task"}]
});

module.exports = mongoose.model('Week', WeekSchema);
