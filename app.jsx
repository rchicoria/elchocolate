'use strict';

var React = require('react'); 
var Router = require('react-router'); 

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

import data from './dummyItems';
import Icon from './icons.jsx';

var backgroundImg = '/background_tiles.png';

/*
 * TileInfo Component
 * Displays a brown stripe with the item name on the bottom of the Tile 
 */
export var TileInfo = React.createClass({
	render() {
		var item = this.props.item;
		var style = {
			container: {
				width: '100%',
				height: '70px',
				fontSize: '90%',
				color: '#50332D',
				position: 'absolute',
				bottom: '0',
				background: 'white',
				padding: '11px 10px 0 10px',
				boxSizing: 'border-box',
				textAlign: 'center'
			},
			name: {
				padding: 0,
				margin: "5px 0 0 0"
			},
			shortDescription: {
				padding: 0,
				marginTop: "0",
				color: "#684843"
			}
			
		};
		return (
			<div style={style.container}>
				<h3 style={style.name}>{item.name}</h3>
				<h4 style={style.shortDescription}>{item.short_description}</h4>
			</div>
		)
	}
})

/*
 * Tile Component
 * Currently a tile is just a background image a TileInfo component
 */
export var Tile = React.createClass({
	render() {
		var item = this.props.item;
		var style = {
			display: 'inline-block',
			width: '350px',
			height: '350px',
			margin: '15px',
			backgroundImage: 'url('+item.img+')',
			backgroundPosition: 'center center',
			backgroundSize: 'cover',
			position: 'relative',
			boxShadow: '0 3px 0px 0px #442B27',
			cursor: 'pointer'
		};
		return (
			<div style={style}>
				<TileInfo item={item}/>
			</div>
		)
	}
});

/*
 * Board Component
 * Contains tiles representing the items got from dummyItems.json 
 */
export var Board = React.createClass({
	render() {
		var style = {
			width: 'auto',
			height: 'auto',
			marginTop: '90px',
			display: 'flex',
			justifyContent: 'center',
			alignContent: 'flex-start',
			flexWrap: 'wrap'
		};
		var items = this.props.data;
		return (
			<section style={style}>
				{items.map(function(item){
					return <Tile key={item.name} item={item} />;
				})}
			</section>
		)
	}
})

/*
 * TopBar component
 * Currently is just a white topbar with ElChocolate SVG logo, defined in Icons.jsx
 */
export var TopBar = React.createClass({
	style: {
		position: 'fixed',
		top: 0,
		width: '100%',
		height: '70px',
		background: 'white',
		padding: '0 70px 0 70px',
		boxShadow: '0 10px 6px -6px #442B27'
	},
	render(){
		var iconColor = 'rgba(80, 51, 45, 1.0)';
		return (
			<header style={this.style}>
				<Icon icon="logo" size="70px" color={iconColor}/>
			</header>
		)
	}
});

/*
 * ElChocolate component
 * Contains the TopBar and a RouteHandler that decides which components will be rendered there
 */
export var ElChocolate = React.createClass({
	getInitialState: function(){
		return {data: data}
	},
	style: {
		html: {
			width: '100%',
		},
		body: {
			width: '100%',
			margin: 0,
			padding: 0,
			fontFamily: "Helvetica Neue",
			background: "repeating-linear-gradient(135deg, \
	  			  			#50332D, \
	  			  			#50332D 20px, \
	  			  			#684843 20px, \
	  			  			#684843 22px \
						)"
		}
	},
	render() {
		return (
			<html style={this.style.html}>
				<head>
					<meta charset="utf-8" />
			        <title>El Chocolate</title>
				</head>
				<body style={this.style.body}>
					<TopBar />
					<RouteHandler data={this.state.data}/>
					<script src="https://raw.githubusercontent.com/LeaVerou/prefixfree/gh-pages/prefixfree.min.js"></script>
					<script src="https://raw.githubusercontent.com/LeaVerou/prefixfree/gh-pages/plugins/prefixfree.dynamic-dom.min.js"></script>
					<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
					<script src="/polyfill.js"></script>
			        <script src="/app.js"></script>
				</body>
			</html>
		);
	}
}) 

/*
 * react-router routes 
 * https://github.com/rackt/react-router
 */
export var routes = (
	<Route name="elchocolate" path="/" handler={ElChocolate}>
    	<DefaultRoute handler={Board}/>
		<Route name="board" handler={Board}/>
  	</Route>
);


/*
 * If we are on the client, render react-router Handler component.
 * It will look at the current url and render the component set in 'routes'
 */
if (typeof window !== 'undefined') {
	window.onload = function() {
		Router.run(routes, function (Handler) {
			React.render(<Handler/>, document.body);
		});
	}
}