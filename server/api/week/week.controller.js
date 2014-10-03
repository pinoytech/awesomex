'use strict';

var Week = require('./week.model');
var User = require('./../user/user.model');
var Task = require('./../task/task.model');
var config = require('../../config/environment');
var moment = require('moment');
var getWeekNumber = function(start_date) {
  for(var i = 0; i < 7; i++) {
    var endOfWeek = moment(start_date).endOf('week').add(i, 'weeks').format("YYYY-MM-DD");
    var target = moment(endOfWeek).startOf('week').format("YYYY-MM-DD");
    for(var j = 0; j < 7; j++) {
      if(target == moment(start_date).format("YYYY-MM-DD")) {
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
  Week.findById(req.params.user_id, function (err, weeks) {
    if (err) return next(err);
    res.json(weeks);
  });
};

exports.current_week = function (req, res, next) {
  User
    .findOne(req.params.user_id, function (err, user) {
      if (err) return next(err);
      if (!user) return res.send(404, "No user found");
      var weekNumber = getWeekNumber(user.start_date);
      Week
        .findOne({name: weekNumber})
        .populate("tasks")
        .exec(function (err, week) {
          res.json(week);
        });
  });
};
