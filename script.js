/*
    Denny Ho
    script.js

    Script sets up initial data and binds data to SVG rects.
    Script holds parameters for the SVG objects. 
*/

// SVG dims
var height = 700;
var width = 700;

// Data values
var data = [];
var sorted = [];
var length = 50;

// Create array of rectangle length values
for (i = 0; i < length; i++) {
    var val = Math.floor(Math.random() * height + 1);
    while (data.includes(val)) {
        val = Math.floor(Math.random() * height + 1);
    }
    data.push(val);
}

var reset = false;

// Create rects using d3 join and data array
d3.select("#vis1").append("svg").attr("width", width).attr("height", height);
var rects = d3.select("#vis1")
    .select("svg")
    .selectAll("rect")
    .data(data).enter()
    .append("rect");

// Y axis scale
var yScale = d3.scaleLinear()
    .domain([0, length])
    .range([0, height]);

// Updates the rectangle attributes
function update() {    
    rects.attr("width", function(val) { 
        return Math.ceil(val);
    })
    .attr("height", function(val) { 
        return Math.ceil(height / data.length); 
    })
    .attr("id", function(d) {
        return "rect" + d
    })
    .attr("x", function(val) { 
        return Math.ceil(0); 
    })
    .attr("y", function(val, i) { 
        return 0; 
    })
    .attr("transform", function(d, i) {
        return `translate(${0},${yScale(i)})`;
    })
    .attr("fill", function(val) {
        return d3.lab(80, -60, 0);
    })
    .attr("stroke", "white");
}

update();

  


