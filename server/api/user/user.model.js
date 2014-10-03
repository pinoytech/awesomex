'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');

var UserSchema = new Schema({
  token: String,
  start_date: Date,
  total_score: { type: Number, default: 0 },
  total_min_quota: { type: Number, default: 0 },
  total_quota: { type: Number, default: 0 }
});

// Validate empty token
UserSchema
  .path('token')
  .validate(function(token) {
    return token.length;
  }, 'Token cannot be blank');

// Validate token is not taken
UserSchema
  .path('token')
  .validate(function(value, respond) {
    var self = this;
    this.constructor.findOne({token: value}, function(err, user) {
      if(err) throw err;
      if(user) {
        if(self.id === user.id) return respond(true);
        return respond(false);
      }
      respond(true);
    });
}, 'The specified token is already in use.');

var validatePresenceOf = function(value) {
  return value && value.length;
};

/**
 * Pre-save hook
 */
UserSchema
  .pre('save', function(next) {
    if (!this.isNew) return next();

    if (!validatePresenceOf(this.token))
      next(new Error('Invalid password'));
    else
      next();
  });

module.exports = mongoose.model('User', UserSchema);
