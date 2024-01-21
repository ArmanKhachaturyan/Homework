//3. A repdigit is a positive number composed out of the same digit. Create a function that takes an integer and returns whether it’s a repdigit or not.
// isRepdigit(66)➞ true
// isRepdigit(0)➞ true
// isRepdigit(-11)➞ false


function isRepdigit(num) {
    // Convert the number to a string to iterate through its digits
    const numStr = Math.abs(num).toString();

    // Check if all digits are the same using the Set data structure
    return new Set(numStr).size === 1;
}

// Example usage
console.log(isRepdigit(66)); // Output: true
console.log(isRepdigit(0)); // Output: true
console.log(isRepdigit(-11)); // Output: false