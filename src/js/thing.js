// NPM modules
var d3 = Object.assign({},
	require("d3-selection"),
	require("d3-request"),
	require("d3-scale"),
	require("d3-axis"),
	require("d3-shape"),
	require("d3-array"),
	require("d3-format"),
	require("d3-transition")
);

// Local modules
var features = require('./detectFeatures')();
var fm = require('./fm');
var utils = require('./utils');

// Globals
var DEFAULT_WIDTH = 940;
var MOBILE_BREAKPOINT = 600;


/**
 * Initialize the graphic.
 *
 * Fetch data, format data, cache HTML references, etc.
 */
function init() {
	fm.setup()

	d3.select("#modes").on("change", onModeChange);

	window.addEventListener("resize", utils.throttle(onResize, 250), true);
}

function onModeChange() {
	var selected = d3.select(this).node().value;

	d3.selectAll(".mode").style("display", "none");
	d3.select("#" + selected).style("display", "inherit");

	d3.select("#selected").style("display", "inherit");

	fm.resize();
}

/**
 * Invoke on resize. By default simply rerenders the graphic.
 */
function onResize() {
	fm.resize();
}

// Bind on-load handler
document.addEventListener("DOMContentLoaded", function() {
	init();
});
