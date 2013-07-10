var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  content = fs.readFileSynch("index.html").toString;
  response.sent(content);

}

  response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
