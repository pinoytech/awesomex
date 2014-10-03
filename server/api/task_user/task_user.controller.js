'use strict';

var User = require('./../user/user.model');
var TaskUser = require('./../task_user/task_user.model');
var Task = require('./../task/task.model');
var config = require('../../config/environment');
var moment = require('moment');
var recomputeScore = function(user) {
  Task.find(function(err, tasks) {
    var totalScore = 0;
    var myScore = 0;
    for(var i=0; i< tasks.length; i++) {
      totalScore+=parseFloat(tasks[i].point);
    }
    TaskUser.find({_user: user._id, checked: true}).populate("_task").exec(function(err, data) {
      for(var i=0; i< data.length; i++) {
        if(data[i]._task)
          myScore+=parseFloat(data[i]._task.point);
      }
      user.total_score = myScore;
      user.save();
    });
  });
}

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
            Task.findById(taskuser._task, function(err, task) {
              task.task_users.push(taskuser);
              task.save();
              user.task_users.push(taskuser);
              user.save();
              recomputeScore(user);
              res.json(taskuser);
            });
          });
        });
  });
};
