<h1 style='color: crimson; font-weight: bold;'>Node.js Cheatsheet</h1>

## Node.js Overview

### Description
Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to execute JavaScript code outside of a browser. It is designed to build scalable network applications and is commonly used for server-side programming.

## Getting Started with Node.js

### Installation
Visit the official Node.js website (https://nodejs.org/) and download the latest LTS (Long Term Support) version. Follow the installation instructions for your operating system.

### Verify Installation
To verify that Node.js and npm (Node Package Manager) are installed, open a terminal or command prompt and run the following commands:
```bash
node -v
npm -v
```

## Process API Documentation

### process Object
The `process` object is a global object that provides information about the current Node.js process. Commonly used properties and methods include:
- `process.env`: An object containing the user environment.
- `process.argv`: An array containing command-line arguments.
- `process.cwd()`: Returns the current working directory.
- `process.exit(code)`: Exits the process with the specified exit code.

## Child Process

### Child Process Module
Node.js provides the `child_process` module to create and interact with child processes. Common functions include:
- `spawn()`: Launches a new process.
- `exec()`: Runs a command in a shell.
- `fork()`: Spawns a new Node.js process.

Example using `spawn`:
```javascript
const { spawn } = require('child_process');
const child = spawn('ls', ['-lh', '/usr']);
```

## Express Getting Started

### Installation
Express is a popular web application framework for Node.js. Install it using npm:
```bash
npm install express
```

### Basic Server Setup
Create a basic Express server in a file (e.g., `app.js`):
```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
```

## Mocha Documentation

### Installation
Mocha is a feature-rich JavaScript test framework. Install it globally for command-line use or locally for project-specific use:
```bash
npm install -g mocha   # global installation
npm install --save-dev mocha   # local installation
```

### Writing Tests
Create test files using the `describe` and `it` functions:
```javascript
const assert = require('assert');

describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
```

Run tests using:
```bash
mocha testfile.js
```

## Nodemon Documentation

### Installation
Nodemon is a utility that monitors for changes in your source code and automatically restarts your Node.js application.
```bash
npm install -g nodemon
```

### Usage
Run your Node.js application using nodemon:
```bash
nodemon your_app.js
```

Nodemon will watch for file changes and automatically restart the server, making development more efficient.
