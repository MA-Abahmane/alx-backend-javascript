/**
 * Using the database database.csv (provided in project description),
 *  create a function countStudents in the file 3-read_file_async.js
 *
 * Create a function named countStudents. It should accept a path in
 *   argument (same as in 2-read_file.js)
 * The script should attempt to read the database file asynchronously
 * The function should return a Promise
 * If the database is not available, it should throw an error with the text
 *   Cannot load the database
 * If the database is available, it should log the following message to the
 *   console Number of students: NUMBER_OF_STUDENTS
 * It should log the number of students in each field, and the list with the
 *   following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
 * CSV file can contain empty lines (at the end) - and they are not a valid student!
 */
/* eslint-disable */
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        var result = []
        // Split the CSV data into rows
        const rows = data.split('\n').filter((row) => row.trim() !== '');

        // removes the header row
        rows.shift();

        // number of students
        const numberOfStudents = rows.length;
        console.log(`Number of students: ${numberOfStudents}`);
        
        result.push(`Number of students: ${numberOfStudents}`)

        // Count students in each field
        const fields = {};
        rows.forEach((row) => {
          const [firstName, lastName, age, field] = row.split(',');
          if (field in fields) {
            fields[field].push(firstName.trim());
          } else {
            fields[field] = [firstName.trim()];
          }
        });

        // Log the number of students in each field
        for (const field in fields) {
          const count = fields[field].length;
          const list = fields[field].join(', ');
          message = `Number of students in ${field}: ${count}. List: ${list}`
          console.log(message);
    
          result.push(message)
        }

        resolve(result.join('\n'));
      }
    });
  });
}

module.exports = countStudents;
