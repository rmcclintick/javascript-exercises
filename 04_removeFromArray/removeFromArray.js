const removeFromArray = function(array, numToRemove) {
    console.log(array);
    return array.filter(function(element){
        return element != numToRemove;
    });
    console.log(array);
};

// Do not edit below this line
module.exports = removeFromArray;
