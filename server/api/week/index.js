'use strict';

var express = require('express');
var controller = require('./week.controller');
var config = require('../../config/environment');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/:user_id/weeks', auth.isAuthenticated(), controller.index);
router.get('/:user_id/current_week', auth.isAuthenticated(), controller.current_week);

module.exports = router;
