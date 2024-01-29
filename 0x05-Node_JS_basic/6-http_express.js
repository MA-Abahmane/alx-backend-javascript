/**
 * Install Express and in a file named 6-http_express.js, create a small HTTP server using Express module:
 * 
 *  It should be assigned to the variable app and this one must be exported
 *  HTTP server should listen on port 1245
 *  Displays Hello Holberton School! in the page body for the endpoint /
 */

const exp = require('express');

const app = exp();
const port = 1245;

// Start application server
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port);


module.exports = app;
