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
                if (i <= data.length) {
                    d3.select("#rect" + data[i]).attr("class", "testing")

                    d3.timeout(function() {
                        d3.select("#rect" + data[i]).attr("class", "");

                        if (data[i] < min) {
                            d3.select("#rect" + data[i]).attr("class", "min")
                            d3.select("#rect" + min).attr("class", "")
                            min = data[spliceIndex = i]
                        }
                        i++;

                        d3.timeout(function() {return findMin()}, 10/2);

                    }, 10/2);

                } 
                else {

                    sorted.push(min);
                    data.splice(spliceIndex,1);

                    rects.transition()
                        .duration(10 * 4)
                        .attr("transform", function(d) {
                            //var xVal = sorted.indexOf(d) > -1 ? sorted.indexOf(d) : data.indexOf(d) + sorted.length;
                            //console.log(xVal);
                            var xVal;
                            if (sorted.indexOf(d) > -1) {
                                xVal = sorted.indexOf(d);
                            }
                            else {
                                xVal = data.indexOf(d) + sorted.length;
                            }
                            return `translate(${0},${yScale(xVal)})`;
                        })

                    rects.attr("class", "")

                    d3.timeout(function() {
                        if (data.length > 0) selectionSort();
                    }, 10);
                    return;
                }                
            })
        }
        findMin();
    }