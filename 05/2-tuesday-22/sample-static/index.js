const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res) {
  res.send("<link rel='stylesheet' href='/styles.css'><h2> static files example </h2><img src='/public/ironyardlogo.png'>");
});

app.get("/styles.css", (req, res) => {
  res.send(fs.readFileSync('./styles.css'));
});

app.listen(3000, function() {
  console.log("it works");
  console.log(__dirname);
});
