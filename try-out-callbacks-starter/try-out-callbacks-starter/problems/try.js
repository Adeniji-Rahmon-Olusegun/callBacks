let mySimpleReduce = function(array, cb) {
    let accumulator = array[0];

    for (let idx = 1; idx < array.length; idx++) {
        let element = array[idx];

        accumulator = cb(accumulator, element);
    }

    return accumulator;
};

let result1 = mySimpleReduce([5, 3, 2, 4], function(sum, el) {
    return sum + el;
});
console.log(result1); // 14

let result2 = mySimpleReduce([4, 6, 2], function(product, el) {
    return product * el;
});
console.log(result2); // 48

let result3 = mySimpleReduce([4, 6, 2, 8, 3], function(max, el) {
    if (el > max) {
        return el;
    } else {
        return max;
    }
});
console.log(result3); // 8
