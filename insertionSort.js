// Insertion Sorts sorts by inserting values from the unsorted data into a sorted list
// This is done by partitioning the data into a sorted and unsorted section
function insertionSort() {
    var value = data.shift();
    sorted.push(value);      
    sortHelper(sorted.length-1);

    // sortHelper handles sorting the new value into the sorted list
    function sortHelper(n) {
        if (reset) {
            reset = false;
            return;
        }
        
        d3.selectAll("rect").attr("class", "")                
        d3.select("#rect" + value).attr("class", "testing")
        
        // New value is less than current element in sorted 
        if (n > 0 && sorted[n-1] > value) {
            d3.timeout(function() {
                sorted.splice(n,1); // Remove value from end
                sorted.splice(n-1,0,value); // Insert value at n-1

                // Swap svg rects
                swap(sorted[n], n);
                swap(sorted[n-1], n-1);

                // Recurse to keep inserting downwards
                sortHelper(--n)
            }, 10 * 2);
        } 
        else if (data.length) {
            // Data is still not fully sorted
            d3.timeout(function() {insertionSort()}, 10 * 2);
        } 
        else {
            // Data fully sorted
            return d3.selectAll("rect").attr("class", "")
        }
    }
}

// Transition svg rect 'd' to new 'i' position
function swap(d, i) {
    console.log(i);
    d3.select("#rect" + d)
        .transition().duration(10)
        .attr("transform", function(d) {
            return `translate(${0},${yScale(i)})`
        })               
}