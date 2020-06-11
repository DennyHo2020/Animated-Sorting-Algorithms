// Bubble Sort
$("#bubbleSortButton").on("click", function() {
    bubbleSort();
})  

// Insertion Sort
$("#insertionSortButton").on("click", function() {
    insertionSort();
})

// Insertion Sort
$("#selectionSortButton").on("click", function() {
    selectionSort();
})

// Merge Sort

$("#mergeSortButton").on("click", function() {
    mergeSort();
})

// Resets data and sorted arrays, and rebinds svg rects to new data
$("#resetButton").on("click", function() {
    reset = true; 
    data = [];
    sorted = [];
    // Create array of rectangle length values
    for (i = 0; i < length; i++) {
        var val = Math.floor(Math.random() * height + 1);
        while (data.includes(val)) {
            val = Math.floor(Math.random() * height + 1);
        }
        data.push(val);
    }             
    // Rebind rects to new data and transition to new positions
    rects.data(data)
        .attr("class", "")                
        .transition().duration(2000)
        .attr("width", function(val) { 
            return Math.ceil(val);
        })
        .attr("id", function(d) {
            return "rect" + d
        })
        .attr("transform", function(d, i) {return `translate(${0},${yScale(i)})`});
    reset = false;
})
/*
$("#sizeButton").on("click", function() {
    document.getElementById("#sizeButton");
})
*/