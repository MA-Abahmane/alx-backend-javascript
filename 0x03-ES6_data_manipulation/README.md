# JavaScript Array Manipulation Cheatsheet


## Initialization

```javascript
// Creating an empty array
let emptyArray = [];

// Creating an array with elements
let fruits = ['apple', 'banana', 'orange'];

// Creating an array with a specified length and default values
let arrayWithLength = new Array(5); // Creates [undefined, undefined, undefined, undefined, undefined]

// Creating an array using Array.from()
let numbers = Array.from({ length: 5 }, (_, index) => index); // Creates [0, 1, 2, 3, 4]
```

## Accessing Elements

```javascript
// Accessing an element by index
let firstFruit = fruits[0]; // 'apple'

// Iterating through array elements
fruits.forEach(fruit => {
    console.log(fruit);
});
```

## Adding and Removing Elements

```javascript
// Adding elements to the end
fruits.push('grape', 'kiwi'); // Adds 'grape' and 'kiwi' to the end

// Adding elements to the beginning
fruits.unshift('pear', 'pineapple'); // Adds 'pear' and 'pineapple' to the beginning

// Removing the last element
let lastFruit = fruits.pop(); // Removes and returns the last element

// Removing the first element
let firstFruit = fruits.shift(); // Removes and returns the first element
```

## Finding Elements

```javascript
// Finding the index of an element
let bananaIndex = fruits.indexOf('banana'); // Returns the index of 'banana' or -1 if not found

// Finding the last index of an element
let lastBananaIndex = fruits.lastIndexOf('banana'); // Returns the last index of 'banana' or -1 if not found

// Finding elements based on a condition
let filteredFruits = fruits.filter(fruit => fruit.length > 5); // Returns an array with fruits longer than 5 characters
```

## Modifying Elements

```javascript
// Updating an element by index
fruits[1] = 'blueberry'; // Updates the element at index 1 to 'blueberry'

// Replacing elements with splice
fruits.splice(1, 2, 'watermelon', 'cherry'); // Removes 2 elements starting from index 1 and adds 'watermelon' and 'cherry'
```


## Array Transformation

```javascript
// Mapping over elements
let uppercaseFruits = fruits.map(fruit => fruit.toUpperCase()); // Returns a new array with all elements in uppercase

// Reducing to a single value
let totalLength = fruits.reduce((acc, fruit) => acc + fruit.length, 0); // Calculates the total length of all fruits
```


## Array Slicing

```javascript
// Extracting a portion of an array
let slicedFruits = fruits.slice(1, 3); // Returns a new array with elements at index 1 and 2
```


## Sorting and Reversing

```javascript
// Sorting in ascending order
fruits.sort();

// Sorting in descending order
fruits.sort((a, b) => b.localeCompare(a));

// Reversing the array
fruits.reverse();
```


## Other Useful Functions

```javascript
// Checking if every element satisfies a condition
let allLengthGreaterThan2 = fruits.every(fruit => fruit.length > 2);

// Checking if at least one element satisfies a condition
let someLengthGreaterThan5 = fruits.some(fruit => fruit.length > 5);

// Concatenating arrays
let moreFruits = ['mango', 'papaya'];
let allFruits = fruits.concat(moreFruits); // Returns a new array
```


<hr>
<hr>


# JavaScript Typed Array Cheatsheet

Typed Arrays are array-like objects that provide a mechanism for reading and writing raw binary data. They are especially useful for handling binary data efficiently.

## Typed Array Types

- `Int8Array`: 8-bit two's complement signed integer
- `Uint8Array`: 8-bit unsigned integer
- `Uint8ClampedArray`: 8-bit unsigned integer (clamped to 0-255)
- `Int16Array`: 16-bit two's complement signed integer
- `Uint16Array`: 16-bit unsigned integer
- `Int32Array`: 32-bit two's complement signed integer
- `Uint32Array`: 32-bit unsigned integer
- `Float32Array`: 32-bit IEEE floating-point number
- `Float64Array`: 64-bit IEEE floating-point number
- `BigInt64Array`: 64-bit signed BigInt
- `BigUint64Array`: 64-bit unsigned BigInt


## Initialization

```javascript
// Creating a Typed Array with length
let intArray = new Int32Array(4); // Creates a new Int32Array with 4 elements

// Creating a Typed Array from an existing array or iterable
let floatArray = Float32Array.from([1.1, 2.2, 3.3]);

// Creating a Typed Array from a buffer
let buffer = new ArrayBuffer(16); // 16 bytes
let intView = new Int32Array(buffer); // Creates a view of the buffer as 4 Int32 elements
```

## Accessing Elements

```javascript
// Accessing an element by index
let value = intArray[2];

// Iterating through Typed Array elements
intArray.forEach(element => {
    console.log(element);
});
```

## Setting Values

```javascript
// Setting a value by index
intArray[1] = 42;
```

## Typed Array Properties

```javascript
// Getting the length of the Typed Array
let length = intArray.length;

// Getting the size in bytes of each element in the Typed Array
let byteSize = intArray.BYTES_PER_ELEMENT;
```

## Subarray Operations

```javascript
// Creating a subarray
let subarray = intArray.subarray(1, 3); // Creates a new Int32Array with elements at index 1 and 2
```

## Buffer Operations

```javascript
// Getting the buffer associated with a Typed Array
let buffer = intArray.buffer;

// Getting the byte length of the buffer
let byteLength = buffer.byteLength;
```

## DataView

`DataView` provides a low-level interface for reading and writing arbitrary data to a buffer.

```javascript
// Creating a DataView from a buffer
let dataView = new DataView(buffer);

// Reading and writing values using DataView
let value = dataView.getInt32(0, true); // Reads a 32-bit signed integer at byte offset 0
dataView.setFloat64(8, 3.14, true); // Writes a 64-bit floating-point number at byte offset 8
```


#### <i> .MAA </i>
