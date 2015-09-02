// Generated by CoffeeScript 1.9.3
(function() {
  var app, express, port;

  express = require('express');

  app = express.createServer(express.logger());

  app.put('/', function(req, res) {
    return res.send(JSON.stringify({
      status: "success"
    }));
  });

  port = process.env.PORT || 3000;

  app.listen(port, function() {
    return console.log("Listening on " + port);
  });

}).call(this);