// 4. Write a

// function to deeply freeze an object.Unlike Object.freeze, which only freezes the top - level properties, a deep freeze will recursively apply to all nested objects.
// let obj = { a: { b: 2 } };
// deepFreeze(obj);
// obj.a.b = 3; // Throws error in strict mode



function deepFreeze(obj) {
    // Get the property names defined on the object
    var propNames = Object.getOwnPropertyNames(obj);

    // Freeze properties before freezing self
    propNames.forEach(function(name) {
        var prop = obj[name];

        // Freeze prop if it's an object
        if (typeof prop === 'object' && prop !== null) {
            deepFreeze(prop);
        }
    });

    // Freeze the object itself
    return Object.freeze(obj);
}

// Example usage:
let obj = { a: { b: 2 } };
deepFreeze(obj);

// Attempt to modify a property should throw an error
try {
    obj.a.b = 3;
    console.log('No error occurred.');
} catch (error) {
    console.error(error.message); // This should print an error about trying to assign to a read-only property
}