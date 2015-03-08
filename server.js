'use strict';

// io.js doesn't support 'export' syntax 
require('babel/register');

var React = require('react');
var server = require('express')();
var Router = require('react-router'); 

// Require react-router routes from app.jsx
var routes = require('./app.jsx').routes;

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
	Router.run(routes, req.url, function (Handler) {
	    var content = React.renderToString(React.createElement(Handler, null));
	    res.send('<!DOCTYPE html>' + content);
	  });
});

// Listen for connections
server.listen(process.env.PORT || 8000, function() {
  console.log('Server is listening...');
});