'use strict';

var mongoose = require('mongoose');
var passport = require('passport');
var config = require('../config/environment');
var compose = require('composable-middleware');
var User = require('../api/user/user.model');

/**
 * Attaches the user object to the request if authenticated
 * Otherwise returns 403
 */
function isAuthenticated() {
  return compose()
    .use(function(req, res, next) {
      console.log(req.headers);
      if(req.headers.authorization && req.headers.authorization != config.secrets.session) {
        res.send(401, "Invalid api token");
      }
      next();
    })
    .use(function(req, res, next) {
      console.log(req.headers);
      User.findOne({token: req.headers.token}, function (err, user) {
        if (err) return next(err);
        if (!user) return res.send(401, "Invalid user token");
        next();
      });
    });
}

function isHeaderAuth() {
  return compose()
    .use(function(req, res, next) {
      console.log(req.headers);
      // allow access_token to be passed through query parameter as well
      if(req.headers.authorization && req.headers.authorization != config.secrets.session) {
        res.send(401, "Invalid api token");
      }
      next();
    })
}

exports.isHeaderAuth = isHeaderAuth;
exports.isAuthenticated = isAuthenticated;