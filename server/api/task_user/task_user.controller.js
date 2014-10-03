'use strict';

var User = require('./../user/user.model');
var TaskUser = require('./../task_user/task_user.model');
var config = require('../../config/environment');
var moment = require('moment');

exports.update = function (req, res, next) {
  User
    .findById(req.params.user_id, function (err, user) {
      if (err) return next(err);
      if (!user) return res.send(404, "No user found");
  });
};
