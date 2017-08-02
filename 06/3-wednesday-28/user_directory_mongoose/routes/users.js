const express = require('express');
const router = express.Router();
const User = require('../models/data');

router.get('/:id', function(req, res){
  User.findOne({ id: parseInt(req.params.id) })
    .then((data) => {
      res.render('profile', data);
    });
})

module.exports = router;
