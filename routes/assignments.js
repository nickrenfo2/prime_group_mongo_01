var express = require('express');
var router = express.Router();
var Assignment = require('../models/assignments');


var newAssign = new Assignment({
  name:"Mongo Peer Challenge",
  assignNum:"1",
  score:'9001',
  completed:new Date()
});



/* GET users listing. */
router.get('/get/:id?', function(req, res, next) {
  //res.send('respond with a resource');
  var assignId = req.params.id;
  if(assignId){
    Assignment.findOne({assignNum:assignId}, function (err,assignment) {
      res.json(assignment);
    });
  } else {
    Assignment.find({}, function (err, assignment) {
      res.json(assignment);
    })
  }
});


router.post('/add', function (req, res) {
  var assign = new Assignment(req.body);
  assign.save(function (err) {
    console.log('err:',err);
    res.send('Oh snap. Somethin done goof\'d');
  });
  console.log('adding Assignment:');
  console.log(req.body);
});

router.delete('/delete/:assignNum', function(request, response, next){
  Assignment.findOne({assignNum: request.params.assignNum}, function(err, assign){
    if(err){
      console.log(err);
      next(err);
    } else {
      if(assign){
        assign.remove(function(err){
          if(err){
            console.log(err);
            next(err);
          } else {
            response.send(200);
          }
        })
      } else {
        response.sendStatus('Assignment not found');
      }
    }
  })
});

module.exports = router;


