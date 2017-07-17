document.addEventListener("click", function contentLoaded() {
  alert("Hello clicked");
});


let donutsEventually = new Promise(function(res, rej){
  setTimeout(function(){
    res("Got Donuts")
  }, 1000)
})


donutsEventually.then(function(donuts){
  console.log(donuts);
  console.log("Eating the donuts now 🍩");
  document.querySelector("body").innerHTML = "🍩"
})
