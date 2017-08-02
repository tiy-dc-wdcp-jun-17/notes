const express = require('express');
const router = express.Router();
const users = require('../models/user');


router.get('/', function(req, res){
  users.findAll((err, data) => {
    res.render('index', { users: data })
  })
});

module.exports = router;
