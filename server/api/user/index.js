'use strict';

var express = require('express');
var controller = require('./user.controller');
var config = require('../../config/environment');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/:id', auth.isAuthenticated(), controller.show);
router.post('/', auth.isHeaderAuth(), controller.create);

module.exports = router;
