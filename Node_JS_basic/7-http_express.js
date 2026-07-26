const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 1245;
const DB_FILE = process.argv[2];

const countStudents = (path) => new Promise((resolve, reject) => {
  if (!path) {
    reject(new Error('Cannot load the database'));
    return;
  }

  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

    if (lines.length <= 1) {
      resolve('Number of students: 0');
      return;
    }

    const students = lines.slice(1);
    const output = [`Number of students: ${students.length}`];

    const fields = {};
    students.forEach((student) => {
      const parts = student.split(',');
      if (parts.length >= 4) {
        const firstname = parts[0].trim();
        const field = parts[3].trim();

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }
    });

    for (const [field, names] of Object.entries(fields)) {
      output.push(
        `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`,
      );
    }

    resolve(output.join('\n'));
  });
});

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.set('Content-Type', 'text/plain');
  const responseText = ['This is the list of our students'];

  countStudents(DB_FILE)
    .then((data) => {
      responseText.push(data);
      res.send(responseText.join('\n'));
    })
    .catch((error) => {
      responseText.push(error.message);
      res.send(responseText.join('\n'));
    });
});

app.listen(PORT);

module.exports = app;
