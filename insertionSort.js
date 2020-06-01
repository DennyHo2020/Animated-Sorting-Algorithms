function insertionSort() {
    var value = data.shift();
    sorted.push(value);      
    reArrange(sorted.length-1);

    function reArrange(n) {

        //d3.selectAll("rect").attr("class", "")                
        //d3.select("#rect" + value).attr("class", "testing")
        //d3.select("#text" + value).attr("class", "sorted")     
            
        if (n > 0 && sorted[n-1] > value) {
            d3.timeout(function() {
                sorted.splice(n,1);
                sorted.splice(n-1,0,value);

                swap(sorted[n], n);
                swap(sorted[n-1], n-1);

                reArrange(--n)
            }, durationTime * 2);
        } 
        else if (data.length) {
            d3.timeout(function() {insertionSort()}, durationTime * 2);
        } 
        else {
            return d3.selectAll("rect").attr("class", "")
        }
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