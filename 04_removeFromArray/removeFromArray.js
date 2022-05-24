const removeFromArray = function(array, ...numsToRemove) {
    console.log(array, numsToRemove);
    return array.filter(value => !numsToRemove.includes(value));
    //array = array.filter(function(element){
        

        // for (let i = 0; i < numsToRemove.length; i++)
        // {
        //     if (element == numsToRemove[i])
        //         return false;
        //     else return true;
        // }
    //});
    //console.log(array);
    //return array;
};

// Do not edit below this line
module.exports = removeFromArray;
