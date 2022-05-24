const reverseString = function(string) {
    let chars = Array.from(string)
    let result = "";

    for (const current of chars)
    {
        result = current + result;
    }  
    return result;
};

// Do not edit below this line
module.exports = reverseString;
