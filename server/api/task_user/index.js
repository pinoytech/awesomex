'use strict';

var express = require('express');
var controller = require('./task_user.controller');
var config = require('../../config/environment');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.put('/task_response', auth.isHeaderAuth(), controller.update);

module.exports = router;
