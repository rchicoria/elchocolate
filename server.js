'use strict';

require('babel/register');

var React = require('react');
var server = require('express')();

// Require and wrap the React main component in a factory before calling it
var ElChocolate = React.createFactory(require('./app.jsx').ElChocolate);

console.log(ElChocolate({}));

// Serve the JavaScript code compiled from app.jsx to the client
server.get('/app.js', function(req, res) {
  res.sendFile(process.cwd() + "/app.js");
});

// Serve polyfills to the client
server.get('/polyfill.js', function(req, res) {
  res.sendFile(process.cwd() + "/node_modules/babel/browser-polyfill.js");
});

// Render the app and send the markup for faster page loads and SEO
server.get('/*', function(req, res) {
  var mainComponent = ElChocolate({});
  var htmlString = React.renderToString(mainComponent);
  res.send('<!DOCTYPE html>' + htmlString);
});

// Listen for connections
server.listen(process.env.PORT || 8000, function() {
  console.log('Server is listening...');
});