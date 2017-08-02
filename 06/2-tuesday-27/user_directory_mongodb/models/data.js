const client = require("../dbConnection");

function findAll(callback) {
  let profiles = client.db.collection("profiles");
  profiles.find({}).toArray((err, data) => {
    callback(data);
  });
}

function findAllEmployed(callback) {
  let profiles = client.db.collection("profiles");
  profiles.find({'job': {$ne:null}}).toArray((err, data) => {
    callback(data);
  });
}

function findAllUnemployed(callback) {
  let profiles = client.db.collection("profiles");
  profiles.find({'job': null}).toArray((err, data) => {
    callback(data);
  });
}

function findById(id, callback) {
  let profiles = client.db.collection("profiles");
  profiles.findOne({"id": id}, (err, data) => {
    callback(data)
  });
}


module.exports = {
  findAll: findAll,
  findById: findById,
  findAllEmployed: findAllEmployed,
  findAllUnemployed: findAllUnemployed
}
