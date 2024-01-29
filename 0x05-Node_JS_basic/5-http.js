const express = require('express');
const fs = require('fs/promises'); // Using fs/promises for promise-based fs functions

const app = express();
const countStudents = require('./3-read_file_async');

const args = process.argv.slice(2);
const DATABASE = args[0];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const studentsData = await countStudents(DATABASE);
    res.send(`This is the list of our students\n${studentsData}`);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.use((req, res) => {
  res.status(404).send('Not found');
});

const server = app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

module.exports = server;
