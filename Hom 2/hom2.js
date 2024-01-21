//2. Create a function named getType that determines the type of a given value in JavaScript. This function should handle all JavaScript primitive types, arrays, and objects. The implementation should use an object to map types to their respective logic for type determination, avoiding the use of traditional if or switch statements.
//console.log(getType([1, 2, 3])); // Should return "array"


function getType(value) {
    const typeMappings = {
        'undefined': () => 'undefined',
        'boolean': val => 'boolean',
        'number': val => 'number',
        'string': val => 'string',
        'symbol': val => 'symbol',
        'function': val => 'function',
        'object': val => (Array.isArray(val) ? 'array' : 'object'),
    };

    const type = typeof value;

    // Check if a specific logic exists for the type, otherwise, default to the type itself
    return typeMappings[type] ? typeMappings[type](value) : type;
}

// Example usage
console.log(getType([1, 2, 3])); // Output: "array"