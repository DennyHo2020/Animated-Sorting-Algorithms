
// Bubble Sort sorts by bubbling up values until the list is sorted
function bubbleSort() {
    // All data has been sorted
    if (!data.length) {
        return;
    }
    // Bubble up values from the begining 
    bubbleHelper(1);
}

function bubbleHelper(i) {
    if (reset) {
        reset = false;
        return;
    }
    
    // All data has been sorted
    if (!data.length) {
        return;
    }
    
    // Bubble Up to End of Data
    if (i <= data.length) {
        // Check whether to bubble value up
        if (data[i] < data[i-1]) {

            d3.select("#rect" + data[i]).attr("class", "testing");
            
            d3.timeout(function() {
                            d3.select("#rect" + data[i]).attr("class", "");
                            d3.select("#rect" + data[i-1]).attr("class", "");                                         
                        }, 
                        10);

            // Swap values in Data
            var temp = data[i-1];
            data[i-1] = data[i];
            data[i] = temp;

            // Swap svg rects
            swap(data[i], i + sorted);
            swap(data[i-1], i-1 + sorted);

            d3.timeout(function() {return bubbleHelper(++i)}, 10);
        }  
        else if (i == data.length) {
            // Bubbled to end, remove element
            data.pop();
            bubbleHelper(++i);
        } 
        else {
            // Bubble up next val instead               
            bubbleHelper(++i);
        }
    } 
    else {
        // Bubble up from beggining
        bubbleSort();
    }
}

// Transition svg rect 'd' to new 'i' position
function swap(d, i) {
    d3.select("#rect" + d)
        .transition().duration(10)
        .attr("transform", function(d) {
            return `translate(${0},${yScale(i)})`
        })               
}