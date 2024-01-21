//const data = [1, 2, 3, 4, 5, 6, 7];
// Output: [[1, 2, 3], [4, 5, 6], [7]]

function chunkArray(array, size) {

    if (!Array.isArray(array) || array.length === 0 || typeof size !== 'number' || size <= 0) {
        return []
    }

    const reult = [];
    for (let i = 0; i < array.length; i += size) {
        reult.push(array.slice(i, i + size));
    }

    return reult
}


const data = [1, 2, 3, 4, 5, 6, 7];

console.log(chunkArray(data, 3));