/**
 * A small HTTP server using the http module:
 *
 *  It should be assigned to the variable app and this one must be exported
 *  HTTP server should listen on port 1245
 *  Displays Hello Holberton School! in the page body for any endpoint as plain text
 */

const exp = require('express');

const app = exp();
const port = 1245;

// Start application server
app.use((req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port);
