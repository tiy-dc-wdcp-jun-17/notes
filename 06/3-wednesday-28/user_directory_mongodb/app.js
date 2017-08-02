const express = require('express');
const mustacheExpress = require('mustache-express');
const path = require('path');
const data = require('./models/data');
const app = express();
const userRoute = require('./routes/users');
const indexRoute = require('./routes/index');

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use(express.static(path.join(__dirname, 'public')));

// Check if there is an ENV variable and set it as an app variable.
app.set("port", process.env.PORT || 3000);

app.use(indexRoute);

app.use(userRoute);

// Start the server if run directly
if (require.main === module) {
  // Start a db connect and list after it's connected.
  const dbClient = require("./dbConnection")
  dbClient.connect((client) => {
    app.listen(app.get("port"), err => {
      if (err) {
        throw err;
        exit(1);
      }

      console.log(
        `Node running in ${app.get("env")} mode @ http://localhost:${app.get(
          "port"
        )}`
      );
    });
  })
}
//
// app.listen(3000, function(){
// });
