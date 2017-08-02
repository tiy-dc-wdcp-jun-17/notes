const express = require('express');
const router = express.Router();
const users = require('../models/user');

router.get('/employed', function(req, res){
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  users.findEmployed(true, function(err, data){
    res.render('index', { users: data })
  })
})

router.get('/unemployed', function(req, res){
  users.findEmployed(false, function(err, data){
    res.render('index', { users: data })
  })
})

router.get('/:id', function(req, res){
  users.findOneById(+req.params.id, function(err, data){
    res.render('profile', data);
  })
})

module.exports = router;
