const express = require('express');
const router = express.Router();
const users = require('../models/data');

router.get('/', (req, res) => {
  users.findAll((data) => {
    res.render('index', { users: data });
  });
});

router.get('/employed', function(req, res){
  users.findAllEmployed((data) => {
    res.render('index', { users: data });
  });
})

router.get('/unemployed', function(req, res){
  users.findAllUnemployed((data) => {
    res.render('index', { users: data });
  });
})

module.exports = router;
