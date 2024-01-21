// 6. Write a JavaScript

// function named isEquivalent that replicates the functionality of the Object.is method.This

// function should provide a reliable way to check
// if two values are exactly the same, including correctly handling JavaScript’ s unique cases like NaN, and distinguishing between - 0 and + 0.
// isEquivalent(NaN, NaN) should
// return true.
// isEquivalent(0, -0) should
// return false.
// isEquivalent(5, 5) should
// return true.
// isEquivalent('hello', 'hello') should
// return true.
// isEquivalent('hello', 'world') should
// return false.
// isEquivalent(true, false) should
// return false.
function isEquivalent(value1, value2) {
    // Handle the special case of NaN
    if (Number.isNaN(value1) && Number.isNaN(value2)) {
        return true;
    }

    // Handle the special case of -0 and +0
    if (value1 === 0 && value2 === 0) {
        return 1 / value1 === 1 / value2;
    }

    // Use strict equality for all other cases
    return value1 === value2;
}

// Example usage
console.log(isEquivalent(NaN, NaN)); // true
console.log(isEquivalent(0, -0)); // false
console.log(isEquivalent(5, 5)); // true
console.log(isEquivalent('hello', 'hello')); // true
console.log(isEquivalent('hello', 'world')); // false
console.log(isEquivalent(true, false)); // false