//Create a function which returns the number of true values there are in an array.
// countTrue([true, false, false, true, false])➞ 2
// countTrue([false, false, false, false])➞ 0
// countTrue([])➞ 0

function countTrue(arr) {
    return arr.filter(value => value === true).length;
}

// Example usage
console.log(countTrue([true, false, false, true, false])); // Output: 2
console.log(countTrue([false, false, false, false])); // Output: 0
console.log(countTrue([])); // Output: 0