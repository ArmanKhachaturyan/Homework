//const nestedArray = [1, [2, [3, [4]], 5]];
//console.log(deepFlatten(nestedArray));
// Output: [1, 2, 3, 4, 5]


function deepFlatten(arr) {
    return arr.reduce((result, element) => {
        if (Array.isArray(element)) {
            return result.concat(deepFlatten(element));
        } else {
            return result.concat(element)
        }
    }, []);
}

const nestedArray = [1, [2, [3, [4]], 5]]
console.log(deepFlatten(nestedArray));