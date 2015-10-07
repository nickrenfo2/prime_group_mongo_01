var express = require('express');
var router = express.Router();
var Assignment = require('../models/assignments');
var path = require('path');

//var assigns;
//Assignment.find({}, function (err,assignment) {
//  console.log('assignment:',assignment);
//  assigns = assignment;
//});
//
//console.log('assigns',assigns);
////console.log(Assignment.find({}));

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express',assignments:assigns});
  res.sendFile(path.join(__dirname,'../public/views/index.html'));
});

module.exports = router;
