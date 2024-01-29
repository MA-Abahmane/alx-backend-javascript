/**
 * In a file named 7-http_express.js, recreate the small HTTP server using Express:
 *
 *   It should be assigned to the variable app and this one must be exported
 *   HTTP server should listen on port 1245
 *   It should return plain text
 *   When the URL path is /, it should display Hello Holberton School! in the page body
 *   When the URL path is /students, it should display This is the list of our students
 *     followed by the same content as the file 3-read_file_async (with and without the database)
 *      - the name of the database must be passed as argument of the file
 *   CSV file can contain empty lines (at the end) - and they are not a valid student!
 */

const exp = require('express');
const countStudents = require('./3-read_file_async');

const args = process.argv.slice(2);
const DATABASE = args[0]

const app = exp();
const port = 1245;

// Start application server
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
    const msg = 'This is the list of our students\n';
    try {
      const students = await countStudents(DATABASE);
      res.send(`${msg}${students}`);
    } catch (error) {
      res.send(`${msg}${error.message}`);
    }
});

app.listen(port);

module.exports = app;
