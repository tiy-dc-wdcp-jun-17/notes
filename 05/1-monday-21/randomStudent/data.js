const chalk = require('chalk');

const students = [
  "Nathan",
  "Guy",
  "Eddy",
  "Tamrat",
  "Tyler"
]

const instructors = [
  "Michael",
  "Russell",
  "Carolina",
  "Alfonso"
]

const upCase = (name) => name.toUpperCase();

function rollCall(){
  instructors.forEach( instructor => {
    console.log(chalk.bgRed(upCase(instructor)))
  })
}

module.exports = {
  "students": students,
  "instructors": instructors,
  "rollCall": rollCall
};

// module.exports = {
//   students,
//   instructors
// };
