function lazyArray(array) {
    const operations = [];

    const handler = {
        get: function(target, prop, receiver) {
            if (prop === 'map') {
                return (callback) => {
                    operations.push(arr => arr.map(callback));
                    return new Proxy(target, handler);
                };
            } else if (prop === 'filter') {
                return (callback) => {
                    operations.push(arr => arr.filter(callback));
                    return new Proxy(target, handler);
                };
            } else {
                // Perform computations when accessing values
                const result = operations.reduce((acc, operation) => operation(acc), target);
                return Reflect.get(result, prop, receiver);
            }
        },
    };

    return new Proxy(array, handler);
}

// Example usage:
const lazy = lazyArray([1, 2, 3, 4]).map(x => x * x).filter(x => x > 5);

// Operations are computed when accessing values
console.log(lazy[1]); // Output: 16