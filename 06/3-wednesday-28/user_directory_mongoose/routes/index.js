const express = require('express');
const router = express.Router();
const User = require('../models/data');

router.get('/', (req, res) => {
  User.find()
    .then((data) => {
      res.render('index', { users: data });
    })
});

router.get('/employed', function(req, res){
  User.find({ job: {$ne:null} })
    .then((data) => {
      res.render('index', { users: data });
    });
})

router.get('/unemployed', function(req, res){
  User.find({ job: null })
    .then((data) => {
      res.render('index', { users: data });
    });
})


module.exports = router;
