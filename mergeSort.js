function mergeSort() {
        var mergeReps = (data.length).toString(2).length + 1;
        var mergeArrays = [[...data], []];

        for (i=0; i<data.length; i += 2) {
            mergeArrays[1].push(mergeTwo([data[i]], [data[i+1]]))
        }
        for (n=2; n<mergeReps; n++) {
            mergeArrays[n] = [];
            var unMerged = mergeArrays[n-1];
            for (i=0; i<unMerged.length; i += 2) {
                mergeArrays[n].push(mergeTwo(unMerged[i], unMerged[i+1] ? unMerged[i+1] : []))
            }
        }
        for (i=1; i<mergeArrays.length; i++) {
            mergeArrays[i] = d3.merge(mergeArrays[i])
        }
        mergeMove(0);
    
        function mergeTwo(iArray, nArray) {
            var newArray = [];
            for (var i=0, n=0; i<iArray.length || n<nArray.length;) {
                if (iArray[i] < nArray[n]) {
                    newArray.push(iArray[i++])
                } else if (iArray[i] > nArray[n]) {
                    newArray.push(nArray[n++])
                } else if (!(iArray[i])) {
                    newArray.push(nArray[n++])
                } else if (!(nArray[n])) {
                    newArray.push(iArray[i++])
                }
            }
            return newArray;
        }

        function mergeMove(j) {
            console.log("boom");
            var oldArray = mergeArrays[j],
                newArray = [...mergeArrays[j+1]],
                sorted = [];

            moveStep(0);

            function moveStep(n) {
                console.log("boom");

                d3.selectAll("rect").attr("class", "")                

                d3.select("#rect" + newArray[n]).attr("class", "testing")

                sorted.push(newArray[n])
                oldArray.shift()

                rects.transition().duration(10)
                    .attr("transform", function(d) {
                        var y;
                        if (sorted.indexOf(d) > -1) {
                            y = sorted.indexOf(d);
                        }
                        else {
                            y = oldArray.indexOf(d) + sorted.length;
                        }
                        return `translate(${0},${yScale(y)})`; 
                    })

                d3.timeout(function() {
                    if (oldArray.length > 0) {
                        moveStep(++n)
                    } 
                    else if (mergeArrays[j + 2]) {
                        mergeMove(++j)
                    } 
                    else {
                        rects.classed("testing", false)
                    }
                }, 10);
            }
        }
    }

