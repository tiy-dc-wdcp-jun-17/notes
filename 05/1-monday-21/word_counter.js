// Count the number of words in a file on my Desktop.
const fs = require("fs");
// console.log(fs);
fs.readFile('/Users/rposborne/Desktop/shakespeare.txt', 'utf8', function (err, data) {
  if(err) { throw err }
  console.log("File done reading");
  console.log(data.split(" ").length);
})

console.log("Waitin on first callback");

let allHisWork = fs.readFileSync('/Users/rposborne/Desktop/shakespeare.txt', 'utf8');
console.log(allHisWork.split(" ").length);
console.log("After second split");
