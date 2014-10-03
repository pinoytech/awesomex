'use strict';

var User = require('./user.model');
var passport = require('passport');
var config = require('../../config/environment');

/**
 * Creates a new user
 */ exports.create = function (req, res, next) {
  var newUser = new User(req.body);
  newUser.save(function(err, user) {
    if (err) return next(err);
    res.json(user);
  });
};

/**
 * Get a single user
 */
exports.show = function (req, res, next) {
  User.findOne({token: req.headers.token}, function (err, user) {
    if (err) return next(err);
    if (!user) return res.send(404, "No user found");
    res.json(user);
  });
};

/**
 * Update start_date
 */
exports.update = function (req, res, next) {
  User.findOne({token: req.headers.token}, function (err, user) {
    if (err) return next(err);
    if (!user) return res.send(404, "No user found");
    if (!req.body.start_date) return res.send(422, "Please provide a start date");
    user.start_date = req.body.start_date;
    user.save(function(err, user) {
      res.json(user);
    });
  });
};
