const client = require("../dbConnection");

function findAll(callback) {
  let profiles = client.db.collection('profiles');
  profiles.find({}).toArray(callback);
}

function findOneById(id, callback) {
  let profiles = client.db.collection('profiles');
  profiles.findOne({"id": id}, callback);
}

function findEmployed(employed, callback){
  let profiles = client.db.collection('profiles');
  if(employed){
    profiles.find({"job":{$ne:null}}).toArray(callback);
  } else {
    profiles.find({"job": null }).toArray(callback);
  }
}
module.exports = {
  findAll: findAll,
  findOneById: findOneById,
  findEmployed: findEmployed
}
