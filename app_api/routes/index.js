var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var ctrlClimb = require('../controllers/climbController');
var ctrlTakeoff = require('../controllers/takeoffController');
var ctrlLanding = require('../controllers/landingController');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Airport Data Querying' });
});

router.get('/climb/:weight/:value', ctrlClimb.climbInfo);

router.get('/takeoff/:weight/:setting/:temp/:altitude/:value', ctrlTakeoff.takeoffInfo);

router.get('/landing/:weight/:setting/:value', ctrlLanding.landingInfo);

module.exports = router;