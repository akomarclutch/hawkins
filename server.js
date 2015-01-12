var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var colors = require('colors');

// configuration ===========================================

  // set environment variables
  var port = process.env.PORT;

  // parse application/json
  app.use(bodyParser.json());

// routes ==================================================

  // route configuration
  require('./app/routes')(app);

// start app ===============================================

  // set static file location
  app.use(express.static(__dirname + '/app'));

  // start app
  app.listen(port);

  // tell user server is available
  console.log(('Job\'s done!\nReady to work...(port ' + port + ')').cyan);

  // expose app
  exports = module.exports = app;
