'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('mongo-relation');

var WeekSchema = new Schema({
  name: String,
  quota: Number
});

WeekSchema.hasMany('Task', {dependent: 'delete'});
module.exports = mongoose.model('Week', WeekSchema);
