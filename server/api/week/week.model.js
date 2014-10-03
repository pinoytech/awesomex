'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var WeekSchema = new Schema({
  name: String
});

module.exports = mongoose.model('Week', WeekSchema);