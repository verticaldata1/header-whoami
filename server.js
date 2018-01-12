// server.js
// where your node app starts

// init project
var express = require('express');
var uaParser = require("ua-parser");
var app = express();

app.get("/", function(req, res) {
  var ips = req.headers['x-forwarded-for'];
  ips = ips.split(",");
  
  var language = req.get('accept-language');
  language = language.split(",");
  
  var ua = uaParser.parse(req.headers['user-agent']);
  
  res.json({ip: ips[0], language: language[0], software: ua.os.toString()});
  return;
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
