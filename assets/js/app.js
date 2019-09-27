// @TODO: YOUR CODE HERE!
// create SVG for chart
var svgArea = d3.select("body").select("svg");

var svgWidth = 1080;
var svgHeight = 720;

var margin = {
    top: 50,
    right: 50,
    bottom: 150,
    left: 150
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart,
// and shift the latter by left and top margins.
var svg = d3
    .select("#scatter")
    .append("svg")
    .attr("viewBox", `0 0 ${svgWidth} ${svgHeight}`);

// Append an SVG group
var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Initial Params
var chosenXAxis = "poverty";
var chosenYAxis = "healthcare";

// function used for updating x-scale var upon click on axis label
function xScale(Hdata, chosenXAxis) {
  // create scales
    var xLinearScale = d3.scaleLinear()
        .domain([d3.min(Hdata, d => d[chosenXAxis]) * 0.8,
        d3.max(Hdata, d => d[chosenXAxis]) 
        ])
        .range([0, width]);

    return xLinearScale;
}

// function used for updating y-scale var upon click on axis label
function yScale(hdata, chosenYAxis) {