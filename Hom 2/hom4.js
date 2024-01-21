// 4. Create a
// function that takes an object and returns the keys and values as separate arrays.Return the keys sorted alphabetically, and their corresponding values in the same order.
// keysAndValues({ a: 1, b: 2, c: 3 })➞[["a", "b", "c"], [1, 2, 3]]
// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })➞[["a", "b", "c"], ["Apple", "Microsoft", "Google"]]
// keysAndValues({ key1: true, key2: false, key3: undefined })➞[["key1", "key2", "key3"], [true, false, undefined]]


function keysAndValues(obj) {
    // Extract keys and values as separate arrays
    const keysArray = Object.keys(obj).sort();
    const valuesArray = keysArray.map(key => obj[key]);

    // Return the result as an array of arrays
    return [keysArray, valuesArray];
}

// Example usage
console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
// Output: [["a", "b", "c"], [1, 2, 3]]

console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
// Output: [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));
// Output: [["key1", "key2", "key3"], [true, false, undefined]]