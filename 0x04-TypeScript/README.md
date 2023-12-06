# TypeScript Cheatsheet

>>> TypeScript is a statically typed superset of JavaScript, adding static types for enhanced development. It facilitates catching errors during development, promoting code quality. With features like classes and interfaces, TypeScript supports object-oriented programming. It compiles to JavaScript, ensuring compatibility and offering excellent tooling support in popular IDEs.
<br>

## 1. Variables

```typescript
# Declare variables
let variable: type = value;
```

## 2. Functions

```typescript
# Declare a function
function functionName(parameter: type): returnType {
    // function body
    return result;
}

# Arrow functions
const arrowFunction = (parameter: type): returnType => {
    // function body
    return result;
};
```

## 3. Interfaces

```typescript
# Declare an interface
interface MyInterface {
    property: type;
    method(): returnType;
}
```

## 4. Classes

```typescript
# Declare a class
class MyClass {
    property: type;

    constructor(parameter: type) {
        this.property = parameter;
    }

    method(): returnType {
        // method body
        return result;
    }
}
```

## 5. Arrays

```typescript
# Declare an array
let myArray: type[] = [value1, value2, value3];

# Array methods
myArray.push(newValue);
myArray.pop();
```

## 6. Enums

```typescript
# Declare an enum
enum MyEnum {
    Value1,
    Value2,
    Value3,
}
```

## 7. Generics

```typescript
# Declare a generic function
function genericFunction<T>(param: T): T {
    return param;
}
```

## 8. Type Assertion

```typescript
# Type assertion
let variable: any = 'string';
let length: number = (variable as string).length;
```

## 9. Type Aliases

```typescript
# Type aliases
type MyType = {
    property: type;
};
```

## 10. Union and Intersection Types

```typescript
# Union types
type MyUnionType = type1 | type2;

# Intersection types
type MyIntersectionType = type1 & type2;
```

<hr>

## Typescript Types

```typescript
# Primitives
let myNumber: number = 42;
let myString: string = 'Hello';
let myBoolean: boolean = true;

# Arrays and Tuples
let myArray: number[] = [1, 2, 3];
let myTuple: [string, number] = ['Hello', 42];

# Objects
let myObject: { key: string, value: number } = { key: 'Hello', value: 42 };

# Functions
let myFunction: (param: number) => string = (num) => `Number is: ${num}`;

# Any
let myAny: any = 'I can be anything';

# Void
let myVoidFunction: () => void = () => { console.log('This function returns nothing'); };

# Null and Undefined
let myNull: null = null;
let myUndefined: undefined = undefined;

# Union and Intersection Types
let myUnion: string | number = 'Hello';
let myIntersection: { name: string } & { age: number } = { name: 'John', age: 25 };

# Literal Types
let myLiteral: 'hello' = 'hello';
```
