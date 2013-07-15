var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

app.get('/', function(request, response) {
  response.send(fs.readFileSync("index.html", "utf-8"));
});

// Port von 5000 auf 8080 geaendert. Auch in AWS frei gegeben.
// Aufruf ueber node web.js oder Browser.
var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
