const express = require('express');
const router = express.Router();

router.get("/api/customer/items", (req, res) => {
  res.json({
    status: "success",
    data: []
  });
});

module.exports = router
