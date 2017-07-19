fetch("https://api.github.com/users/theironyard")
  // Data is going to be fetched and we get a promise.
  .then(
    // The promise returns a response from the server.
    function(response) {
      // We process the response accordingly.
      if (response.status !== 200) {
        console.log(response.status);
        return;
      }
      let jsonParserProm response.json()
      response.json().then(function(data) {
        console.log("Here is the data:", data);
      });
    }
  )
  .catch(function(err) {
    console.log("Fetch Error :-S", err);
  });
