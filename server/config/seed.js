/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Week = require('../api/week/week.model');
var Task = require('../api/task/task.model');

User.find({}).remove(function() {
  var user = new User({ token: "test123456"});
  user.save();
});

Week.find({}).remove(function() {
  var week = new Week({name: 1, quota: 0});
  week.save();
  Task.find({}).remove(function() {
    week.tasks.create({
      title: "test"
    }, function() {
    });
  });
});