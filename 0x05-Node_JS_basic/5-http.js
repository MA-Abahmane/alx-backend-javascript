/**
 * In a file named 5-http.js, create a small HTTP server using the http module:
 *
 *  It should be assigned to the variable app and this one must be exported
 *  HTTP server should listen on port 1245
 *  It should return plain text
 *  When the URL path is /, it should display Hello Holberton School! in the page body
 *  When the URL path is /students, it should display This is the list of our students
 *  followed by the same content as the file
 *    3-read_file_async.js (with and without the database) - the name of the database
 *       must be passed as argument of the file
 *  CSV file can contain empty lines (at the end) - and they are not a valid student!
 */

const exp = require('express');
const countStudents = require('./3-read_file_async')

const app = exp();
const port = 1245;
const file = 'database.csv'

// Start application server
app.get('/', (req, res) => {
  res.type('text/plain')
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
    res.type('text/plain')
    countStudents(file)
    .then((data) => {
        res.send(`This is the list of our students\n${data}`)
    })
    .catch((error) => {
        res.send(error)
    })
})

app.listen(port);


module.exports = app;
