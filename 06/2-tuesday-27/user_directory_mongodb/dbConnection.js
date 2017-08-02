let client = {
  db: null,
  connect: connect
};

function connect(callback) {
  var MongoClient = require("mongodb").MongoClient;
  // Connection URL
  const MONGODB_DB = "robots"
  var url = `mongodb://localhost:27017/${MONGODB_DB}`;

  // Use connect method to connect to the Server
  MongoClient.connect(url, (err, db) => {
    if (err) {
      throw err;
      exit(1);
    }

    console.log(`Connected MongoDB @ ${url}`);
    client.db = db;
    callback(client);
  });
}

module.exports = client;
