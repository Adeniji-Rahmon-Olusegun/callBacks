/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/
let minVal = function (array) {
    let min = Infinity;

    array.forEach(function (element) {
        if (element < min) {
            min = element;
        }
    });

    return min;
}


let minValueCallback = function(array, cb) {
    
    if (cb === undefined) {
        return minVal(array);
    }

    let min = minVal(array);

    return cb(min);
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
