'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');

var UserSchema = new Schema({
  token: String
});

module.exports = mongoose.model('User', UserSchema);
