// l5.Create a
// function to check the type of a variable against a given type, including support
// for primitive types, built - in types(like Array, Date), and custom classes.
// console.log(isType(5, 'number')); // true
// console.log(isType(new Date(), Date)); // true
// console.log(isType([], 'array')); // true




function isType(variable, type) {
    const targetType = typeof type === 'string' ? type.toLowerCase() : type;

    switch (targetType) {
        case 'undefined':
        case 'string':
        case 'number':
        case 'bigint':
        case 'boolean':
        case 'symbol':
            return typeof variable === targetType;

        case 'function':
            return typeof variable === 'function';

        case 'object':
            if (type === null) {
                return variable === null;
            }

            if (type === Array) {
                return Array.isArray(variable);
            }

            return variable instanceof type;

        default:
            return false;
    }
}

// Example usage
console.log(isType(5, 'number')); // true
console.log(isType(new Date(), Date)); // true
console.log(isType([], 'array')); // true
console.log(isType('hello', 'string')); // true
console.log(isType(null, null)); // true
console.log(isType(() => {}, 'function')); // true
console.log(isType(new Map(), 'object')); // true
console.log(isType(42, 'string')); // false