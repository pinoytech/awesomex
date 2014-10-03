/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /weeks              ->  index
 * POST    /weeks              ->  create
 * GET     /weeks/:id          ->  show
 * PUT     /weeks/:id          ->  update
 * DELETE  /weeks/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Week = require('./week.model');

// Get list of weeks
exports.index = function(req, res) {
  Week.find(function (err, weeks) {
    if(err) { return handleError(res, err); }
    return res.json(200, weeks);
  });
};

// Get a single week
exports.show = function(req, res) {
  Week.findById(req.params.id, function (err, week) {
    if(err) { return handleError(res, err); }
    if(!week) { return res.send(404); }
    return res.json(week);
  });
};

// Creates a new week in the DB.
exports.create = function(req, res) {
  Week.create(req.body, function(err, week) {
    if(err) { return handleError(res, err); }
    return res.json(201, week);
  });
};

// Updates an existing week in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Week.findById(req.params.id, function (err, week) {
    if (err) { return handleError(res, err); }
    if(!week) { return res.send(404); }
    var updated = _.merge(week, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, week);
    });
  });
};

// Deletes a week from the DB.
exports.destroy = function(req, res) {
  Week.findById(req.params.id, function (err, week) {
    if(err) { return handleError(res, err); }
    if(!week) { return res.send(404); }
    week.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}