var Pixi = require('pixi.js');
var config = require('./config');

var {
	width,
	height,
	bgColor
} = config;

var app = new Pixi.Application(width, height);
app.renderer.backgroundColor = bgColor;

module.exports = {
	canvas: app.view,
    stage: app.stage,
	render: app.render
};
