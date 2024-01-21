// 5. Create a
// function that takes an array of numbers and returns the second largest number.
// secondLargest([10, 40, 30, 20, 50])➞ 40
// secondLargest([25, 143, 89, 13, 105])➞ 105
// secondLargest([54, 23, 11, 17, 10])➞ 23


function secondLargest(arr) {
    if (arr.length < 2) {
        return "Array should have at least two numbers";
    }

    // Sort the array in descending order
    const sortedArray = arr.sort((a, b) => b - a);

    // Return the second element (second largest number)
    return sortedArray[1];
}

// Example usage
console.log(secondLargest([10, 40, 30, 20, 50])); // Output: 40
console.log(secondLargest([25, 143, 89, 13, 105])); // Output: 105
console.log(secondLargest([54, 23, 11, 17, 10])); // Output: 23