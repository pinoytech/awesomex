'use strict';

var User = require('./../user/user.model');
var TaskUser = require('./../task_user/task_user.model');
var config = require('../../config/environment');
var moment = require('moment');

exports.update = function (req, res, next) {
  User
    .findOne({token: req.headers.token}, function (err, user) {
      if (err) return next(err);
      if (!user) return res.send(404, "No user found");
      TaskUser
        .findOne({_user: user.id, _task: req.body.task_id}, function(err, taskuser) {
          if (err) return next(err);
          if(!taskuser) {
            taskuser = new TaskUser({_user: user.id, _task: req.body.task_id});
          }
          taskuser.checked = Boolean(req.body.checked);
          taskuser.save(function(err, taskuser) {
            res.json(taskuser);
          });
        });
  });
};
