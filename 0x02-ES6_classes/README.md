# ES6 Classes Cheat Sheet


## Class Declaration

```
class ClassName {
  constructor() {
    // constructor code
  }

  // methods and properties
}
```

## Class Constructor

```

class ClassName {
  constructor(param1, param2) {
    this.param1 = param1;
    this.param2 = param2;
  }
}
```

## Class Methods

```
class ClassName {
  method1() {
    // method1 code
  }

  method2() {
    // method2 code
  }
}
```

## Class Inheritance

```
class ChildClass extends ParentClass {
  constructor() {
    super(); // call the parent constructor
    // child constructor code
  }

  // additional methods for the child class
}
```

## Getters and Setters

```
class GetterSetterExample {
  constructor() {
    this._value = 0;
  }

  get value() {
    return this._value;
  }

  set value(newValue) {
    this._value = newValue;
  }
}
```

## Static Methods

```
class StaticMethodExample {
  static staticMethod() {
    // static method code
  }
}
```

## Class Instances

```
const instance = new ClassName();
```

<hr>
ES6 classes provide a more convenient syntax for working with constructor functions and prototypes, offering a cleaner and more readable way to implement object-oriented programming in JavaScript.
