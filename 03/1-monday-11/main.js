let staff = ["Russell", "Carolina", "Michael", "Alfonso"];

// Greet all the staff
for (let i = 0; i < staff.length; i++) {
  console.log("Hello, " + staff[i]);
}

// A forEach can be used in place of a for loop to iterate over an array, passing the element to the function at its first argument.
staff.forEach(function(name, index){
  console.error("Hello, " + name);
});

// Example of an Immediatly Invoked Function Expression (IIFE)
(function (){
  let name = "Russell"

  function sayName(name){
    let message = "Hello, ";
    message = message + name;
    console.log(message);
  }
  sayName("Moose");
})();
