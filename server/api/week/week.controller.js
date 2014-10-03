'use strict';

var Week = require('./week.model');
var User = require('./../user/user.model');
var config = require('../../config/environment');
var getUser = function(req, res, next) {
}
/**
 * Get a week based on week number
 */
exports.index = function (req, res, next) {
  Week.find({user_id: req.params.id}, function (err, weeks) {
    if (err) return next(err);
    res.json(weeks);
  });
};

exports.current_week = function (req, res, next) {
  var user = getUser(req);
  if (user.length == 0) return res.send(404, "No user found");
  res.send(200);
};
