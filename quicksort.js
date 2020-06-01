function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
    
    
    d3.select("#rect" + items[leftIndex])
        .transition().duration(durationTime)
        .attr("transform", function(d) {
            return `translate(${0},${yScale(leftIndex)})`
        })
    d3.select("#rect" + items[rightIndex])
        .transition().duration(durationTime)
        .attr("transform", function(d) {
            return `translate(${0},${yScale(rightIndex)})`
    })
    
}

function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)], 
    i = left, 
    j = right; 
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            //d3.timeout(function(){
            swap(items, i, j); 
            //},durationTime*100);
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); 
        
        if (left < index - 1) { 
            quickSort(items, left, index - 1);
        }
        if (index < right) { 
            quickSort(items, index, right);
        }
    }
    return items;
}

