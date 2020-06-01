

function bubbleSort() {
    var sortedCount = 0;
    bubbleHelper(1);
}

function bubbleHelper(i) {
    if (!data.length) {
        return;
    }

    if (i <= data.length) {
        if (data[i] < data[i-1]) {

            //d3.select("#rect" + data[i]).attr("class", "testing")
            //d3.select("#rect" + data[i-1]).attr("class", "testing")
            
            d3.timeout(function() {
                d3.select("#rect" + data[i]).attr("class", "")
                d3.select("#rect" + data[i-1]).attr("class", "")                                            
            }, durationTime);

            var temp = data[i-1];
            data[i-1] = data[i];
            data[i] = temp;

            swap(data[i], i + sorted);
            swap(data[i-1], i-1 + sorted);

            d3.timeout(function() {return bubbleHelper(++i)}, durationTime);
        } 
        else if (i == data.length) {

            for (n = i; n == data[n-1]; n--) {
                //d3.select("#text" + n).attr("class", "sorted")
                data.pop();
            }              

            bubbleHelper(++i);
        } 
        else {               
            bubbleHelper(++i);
        }

    } 
    else {
        bubbleSort();
    }
}

function swap(d, i) {
    console.log(i);
    d3.select("#rect" + d)
        .transition().duration(durationTime)
        .attr("transform", function(d) {
            return `translate(${0},${yScale(i)})`
        })               
}