
//  function named readDatabase that accepts a file path as argument:

const fs = require('fs');

function readDatabase(path) {
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
