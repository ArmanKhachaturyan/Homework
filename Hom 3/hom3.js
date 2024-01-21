//3. Write a custom implementation of the Array.prototype.map function without using the native .map() method.
// const numbers = [1, 2, 3];
// const doubled = customMap(numbers, num => num * 2);
// console.log(doubled);
// Output: [2, 4, 6]

function customMap(array, callback) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array))
    }

    return result
}
const numbers = [1, 2, 3];
const doubled = customMap(numbers, num => num * 2);

console.log(doubled);