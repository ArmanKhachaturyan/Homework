//Implement Symbol.iterator for a Custom Range Object. Create a custom range object that can iterate over a range of numbers. Implement the Symbol.iterator method to allow it to be used with for...of loops.
// for (let num of range) {
// console.log(num); // Should log numbers from 1 to 5
// }

function Range(start, end) {
    this.start = start;
    this.end = end;
}

Range.prototype[Symbol.iterator] = function*() {
    for (let i = this.start; i <= this.end; i++) {
        yield i;
    }
};

const range = new Range(1, 5);

for (let num of range) {
    console.log(num)
}