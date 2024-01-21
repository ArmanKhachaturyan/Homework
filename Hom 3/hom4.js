// 4. Given two arrays, combine them into one array without any duplicates. Use array methods to achieve this, and consider the performance.
// const array1 = [1, 2, 3];
// const array2 = [2, 3, 4];
// console.log(combineUnique(array1, array2));
// // Output: [1, 2, 3, 4]

function combineUnique(array1, array2) {
    const uniqueSet = new Set(array1.concat(array2));

    const uniqueArry = [...uniqueSet];

    return uniqueArry;
}

const array1 = [1, 2, 3];
const array2 = [2, 3, 4];
console.log(combineUnique(array1, array2));


let newArr = array1.concat(array2.filter((item) => array1.indexOf(item) < 0));
console.log(newArr);