const express = require('express');
const router = express.Router();
const db = require("../models");
const Item = db.item;

router.get("/api/customer/items", (req, res) => {
  Item.findAll().then((items) => {
    res.json({
      status: "success",
      data: items
    });
  })
});

module.exports = router
