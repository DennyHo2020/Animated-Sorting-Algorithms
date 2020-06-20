// Selection Sort looks through the entire array to find the min and then
// inserts the min into the sorted partition at the begining of the array
// Worst Case n^2
// Best Case n^2
function selectionSort() {
        var min = width+1; 
        var spliceIndex;
        var i = 0;

        // Look for min to insert into sorted partition
        function findMin() {
            if (reset) {
                reset = false;
                return;
            }

            d3.timeout(function() {
                // Keep recursing to find min until end of array
                if (i <= data.length) {
                    d3.select("#rect" + data[i]).attr("class", "testing")

                    d3.timeout(function() {
                        d3.select("#rect" + data[i]).attr("class", "");

                        // Update new min value
                        if (data[i] < min) {
                            d3.select("#rect" + data[i]).attr("class", "min")
                            d3.select("#rect" + min).attr("class", "")
                            min = data[spliceIndex = i]
                        }
                        i++;

                        // Recurse to check if next value is min
                        d3.timeout(function() {return findMin()}, 10/2);

                    }, 10/2);

                } 
                else {
                    // End of array reached
                    sorted.push(min);
                    data.splice(spliceIndex,1);

                    // Transform min rect that was found to sorted position
                    rects.transition()
                        .duration(10 * 4)
                        .attr("transform", function(d) {
                            var y;
                            if (sorted.indexOf(d) > -1) {
                                y = sorted.indexOf(d);
                            }
                            else {
                                y = data.indexOf(d) + sorted.length;
                            }
                            return `translate(${0},${yScale(y)})`;
                        })
                    rects.attr("class", "")

                    // Keep recursing until all values are sorted
                    d3.timeout(function() {
                        if (data.length > 0) selectionSort();
                    }, 10);
                    return;
                }                
            })
        }
        findMin();
    }