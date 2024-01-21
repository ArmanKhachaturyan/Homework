//6. Create a function that takes two arrays and returns an array of their intersection (elements that are present in both arrays).

// Output: [3, 4]

function arrayIntersection(array1, array2) {
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
        return [];
    }

    const intersection = array1.filter(element => array2.includes(element))

    return intersection
}


const nums1 = [1, 2, 3, 4];
const nums2 = [3, 4, 5, 6];
console.log(arrayIntersection(nums1, nums2));