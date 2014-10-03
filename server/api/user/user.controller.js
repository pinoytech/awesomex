'use strict';

var User = require('./user.model');
var passport = require('passport');
var config = require('../../config/environment');

var validationError = function(res, err) {
  return res.json(422, err);
};

/**
 * Creates a new user
 */ exports.create = function (req, res, next) {
  var newUser = new User(req.body);
  newUser.save(function(err, user) {
    if (err) return validationError(res, err);
    res.json(user);
  });
};

/**
 * Get a single user
 */
exports.show = function (req, res, next) {
  User.findOne({token: req.query.token}, function (err, user) {
    if (err) return next(err);
    if (!user) return res.send(404, "No user found");
    res.json(user);
  });
};

/**
 * Update start_date
 */
exports.update = function (req, res, next) {
  User.findById(req.params.id, function (err, user) {
    if (err) return next(err);
    if (!user) return res.send(404, "No user found");
    user.start_date = req.params.start_date;
    user.save(function(err, user) {
      res.json(user);
    });
  });
};
