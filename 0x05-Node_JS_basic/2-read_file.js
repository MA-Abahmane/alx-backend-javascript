/**
 * A function named countStudents. It should accept a path in argument
 *  The script should attempt to read the database file synchronously
 *  If the database is not available, it should throw an error with the text
 *    Cannot load the database
 *  If the database is available, it should log the following message to the
 *    console Number of students: NUMBER_OF_STUDENTS
 *  It should log the number of students in each field, and the list with the
 *    following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
 *  CSV file can contain empty lines (at the end) - and they are not a valid student!
 */
/* eslint-disable */
const fs = require('fs');

function countStudents(path) {
  try {
    // Read the database file synchronously
    const data = fs.readFileSync(path, 'UTF8');
    // Split the CSV data into rows
    const rows = data.split('\n').filter((row) => row.trim() !== '');

    // Student count
    rows.shift();
    const nStudents = rows.length;
    console.log(`Number of students: ${nStudents}`);

    // Loop through each row to count students in each field
    const fields = {};
    rows.forEach((row) => {
      row = row.split(',');
      if (row[3] in fields) {
        fields[row[3]].push(row[0]);
      } else {
        fields[row[3]] = [];
        fields[row[3]].push(row[0]);
      }
    });

    // Log the number of students in each field
    for (const field in fields) {
      const count = fields[field].length;
      const list = fields[field].join(', ');
      console.log(`Number of students in ${field}: ${count}. List: ${list}`);
    }
  } catch (error) {
    console.log(error);
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
