// Reading a file asynchronously
import fs from 'fs';

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    if (!path) {
      reject(new Error('Cannot load the database'));
    }
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
      resolve(fields);
    });
  });
}

export default readDatabase;
