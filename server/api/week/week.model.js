'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WeekSchema = new Schema({
  name: String,
  quota: Number,
  tasks: [{ type: Schema.Types.ObjectId, ref: "Task"}]
});

module.exports = mongoose.model('Week', WeekSchema);
