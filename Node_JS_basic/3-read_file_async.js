const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    // Split lines and filter out empty/whitespace-only lines
    const lines = data
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

    // If there's no data or only the header row
    if (lines.length <= 1) {
      console.log('Number of students: 0');
      resolve();
      return;
    }

    // Extract student rows (excluding header)
    const students = lines.slice(1);
    console.log(`Number of students: ${students.length}`);

    // Object to group firstnames by field
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

    // Log summary per field
    for (const [field, names] of Object.entries(fields)) {
      console.log(
        `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`,
      );
    }

    resolve();
  });
});

module.exports = countStudents;
