// Custom Set Implementation with O(1) Complexity
// for Add, Remove, and Check Operations.Implement a custom Set class with constant time complexity
// for add, remove, and check operations.Internally use a JavaScript object to store elements.
// let mySet = new CustomSet();
// mySet.add(1);
// mySet.add(2);
// console.log(mySet.has(1)); // true
// mySet.remove(1);
// console.log(mySet.has(1)); // false




class CustomSet {
    constructor() {
        this.elements = {};
    }

    add(element) {
        // Use the element as a key in the object
        this.elements[element] = true;
    }

    remove(element) {
        // Remove the element from the object
        delete this.elements[element];
    }

    has(element) {
        // Check if the element exists in the object
        return this.elements.hasOwnProperty(element);
    }
}

// Example usage
let mySet = new CustomSet();
mySet.add(1);
mySet.add(2);
console.log(mySet.has(1)); // true
mySet.remove(1);
console.log(mySet.has(1)); // false