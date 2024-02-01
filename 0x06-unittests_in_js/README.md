# Testing Node.js Apps with Mocha, Chai, and SinonJS Cheatsheet

## Table of Contents
1. [Introduction](#introduction)
2. [Setting Up Dependencies](#setting-up-dependencies)
3. [Writing Test Suites with Mocha](#writing-test-suites-with-mocha)
4. [Assertion Library with Chai](#assertion-library-with-chai)
5. [Mocking with SinonJS](#mocking-with-sinonjs)
6. [Running Tests](#running-tests)
7. [Advanced Concepts](#advanced-concepts)

## 1. Introduction
- **Mocha:** A flexible JavaScript test framework.
- **Chai:** A BDD/TDD assertion library.
- **SinonJS:** A library for spies, stubs, and mocks.

## 2. Setting Up Dependencies
```bash
npm install --save-dev mocha chai sinon
```

## 3. Writing Test Suites with Mocha
- **Test Folder Structure:**
  - Create a `test` folder in your project.
  - Place test files with a `.test.js` extension.

- **Example Test File (`test/example.test.js`):**
  ```javascript
  const assert = require('chai').assert;
  const exampleModule = require('../exampleModule');

  describe('Example Module', () => {
    it('should return true', () => {
      const result = exampleModule.exampleFunction();
      assert.isTrue(result);
    });

    it('should handle edge cases', () => {
      // Test edge cases here
    });
  });
  ```

## 4. Assertion Library with Chai
- **BDD Style Assertions:**
  - `assert.isTrue()`, `assert.isFalse()`
  - `assert.equal(actual, expected)`, `assert.strictEqual(actual, expected)`
  - `assert.deepEqual(actual, expected)`, `assert.notDeepEqual(actual, expected)`

- **TDD Style Assertions:**
  - `expect(actual).to.be.true`, `expect(actual).to.be.false`
  - `expect(actual).to.equal(expected)`, `expect(actual).to.deep.equal(expected)`

- **Should Style Assertions:**
  - `actual.should.be.true`, `actual.should.be.false`
  - `actual.should.equal(expected)`, `actual.should.deep.equal(expected)`

## 5. Mocking with SinonJS
- **Spies:**
  - Spy on functions to track calls.
  ```javascript
  const sinon = require('sinon');
  const spy = sinon.spy(object, 'method');
  ```

- **Stubs:**
  - Replace functions with stubs for controlled behavior.
  ```javascript
  const sinon = require('sinon');
  const stub = sinon.stub(object, 'method').returns(fakeValue);
  ```

- **Mocks:**
  - Combine spies and stubs for more complex scenarios.
  ```javascript
  const sinon = require('sinon');
  const mock = sinon.mock(object);
  mock.expects('method').once().withArgs(arg).returns(fakeValue);
  ```

## 6. Running Tests
- **Add Test Script to `package.json`:**
  ```json
  "scripts": {
    "test": "mocha"
  }
  ```

- **Run Tests:**
  ```bash
  npm test
  ```

- **Custom Mocha Configuration (e.g., `mocha.opts`):**
  ```bash
  --recursive
  --timeout 5000
  ```

## 7. Advanced Concepts
- **Async Testing:**
  - Use `async/await` or `done` callback for asynchronous tests.
  ```javascript
  it('should handle async operation', async () => {
    const result = await asyncFunction();
    assert.equal(result, expected);
  });
  ```

- **Hooks:**
  - Use `before`, `beforeEach`, `after`, `afterEach` for setup and teardown.
  ```javascript
  before(() => {
    // Setup tasks
  });

  afterEach(() => {
    // Teardown tasks after each test
  });
  ```

- **Chai Plugins:**
  - Extend Chai with plugins for additional assertions.
  ```javascript
  const chai = require('chai');
  const chaiHttp = require('chai-http');

  chai.use(chaiHttp);
  ```

Feel free to use this cheatsheet according to your specific needs. Happy testing!
