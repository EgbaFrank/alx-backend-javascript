const express = require('express');
const fs = require('node:fs');

const app = express();
const port = 1245;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const rows = data.split('\n').filter((row) => row.trim() !== '');
      const fields = {};
      const students = rows.slice(1);

      for (const student of students) {
        const keys = student.split(',');
        const field = keys[3].trim();
        if (field in fields) {
          fields[field].push(keys[0]);
        } else {
          fields[field] = [keys[0]];
        }
      }
      resolve({ students, fields });
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const db = process.argv[2];
  countStudents(db)
    .then(({ students, fields }) => {
      const result = [
        'This is the list of our students',
        `Number of students: ${students.length}`,
        ...Object.entries(fields).map(([field, students]) => `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`),
      ].join('\n');
      res.send(result);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

module.exports = app;
