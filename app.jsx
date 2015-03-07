'use strict';

var React = require('react'); 
var Router = require('react-router'); 

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

export var LandingPage = React.createClass({
	style: {
		background: 'brown',
		fontFamily: 'sans-serif',
		margin: 0,
		height: '100%',
		width: '100%'
	},
	render(){
		return (
			<div style={this.style} />
		);
	}
})

export var ElChocolate = React.createClass({
	render() {
		return (
			<html>
				<head>
					<meta charset="utf-8" />
			        <title>El Chocolate</title>
				</head>
				<body>
					<RouteHandler {...this.props}/>		
					<script src="/polyfill.js"></script>
			        <script src="/app.js"></script>
				</body>
			</html>
			
		);
	}
}) 

var routes = (
	<Route name="elchocolate" path="/" handler={ElChocolate}>
    	<DefaultRoute handler={LandingPage}/>
		<Route name="teste" handler={LandingPage}/>
  	</Route>
);

if (typeof window !== 'undefined') {
	window.onload = function() {
		Router.run(routes, function (Handler) {
			React.render(<Handler/>, document.body);
		});
	}
}