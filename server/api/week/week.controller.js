'use strict';

var Week = require('./week.model');
var User = require('./../user/user.model');
var Task = require('./../task/task.model');
var config = require('../../config/environment');
var moment = require('moment');
var getWeekNumber = function(user, target_date) {
  for(var i = 0; i < 7; i++) {
    var endOfWeek = moment(user.start_date).endOf('week').add(i, 'weeks').format("YYYY-MM-DD");
    var target = moment(endOfWeek).startOf('week').format("YYYY-MM-DD");
    for(var j = 0; j < 7; j++) {
      if(target == moment(target_date).format("YYYY-MM-DD")) {
        return i+1;
      }
      target = moment(target).add(1, 'days').format("YYYY-MM-DD")
    };
  }
}

/**
 * Get a week based on week number
 */
exports.index = function (req, res, next) {
  Week.findOne({token: req.query.token}, function (err, weeks) {
    if (err) return next(err);
    res.json(weeks);
  });
};

exports.current_week = function (req, res, next) {
  User
    .findOne({token: req.query.token}, function (err, user) {
      if (err) return next(err);
      if (!user) return res.send(404, "No user found");
      if (!req.query.date) return res.send(422, "Please provide the current date");
      var weekNumber = getWeekNumber(user, req.query.date);
      Week
        .findOne({name: weekNumber})
        .populate("tasks")
        .exec(function (err, week) {
          res.json(week);
        });
  });
};
