// 6. Create a
// function that takes a number and returns an array with the digits of the number in reverse order.
// reverseArr(1485979)➞[9, 7, 9, 5, 8, 4, 1]
// reverseArr(623478)➞[8, 7, 4, 3, 2, 6]
// reverseArr(12345)➞[5, 4, 3, 2, 1]


function reverseArr(number) {
    // Convert the number to a string and then split it into an array of characters
    const digitsArray = String(number).split('');

    // Reverse the array and convert each element back to a number
    const reversedArray = digitsArray.reverse().map(Number);

    return reversedArray;
}

// Example usage
console.log(reverseArr(1485979)); // Output: [9, 7, 9, 5, 8, 4, 1]
console.log(reverseArr(623478)); // Output: [8, 7, 4, 3, 2, 6]
console.log(reverseArr(12345)); // Output: [5, 4, 3, 2, 1]