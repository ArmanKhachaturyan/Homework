// 5. Write a
// function that finds the longest string in an array of strings.Make sure it handles edge cases properly.
// const strings = ["short", "medium length", "longest string"];
// console.log(findLongestString(strings));
// // Output: "longest string"

function findLongestString(string) {
    if (!Array.isArray(string) || string.length === 0) {
        return null
    }

    let longestString = string[0];

    for (let i = 0; i < string.length; i++) {
        if (typeof string[i] === 'string' && string[i].length > longestString.length) {
            longestString = string[i]
        }
    }
    return longestString
}

const strings = ["short", "medium length", "longest string", ];
console.log(findLongestString(strings));