const fs = require('fs');

const countStudents = (path) => {
  let data;
  try {
    data = fs.readFileSync(path, 'utf-8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  // Split lines and drop empty/whitespace-only lines
  const lines = data
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  // If there's no data or only the header line
  if (lines.length <= 1) {
    console.log('Number of students: 0');
    return;
  }

  // Extract student data (excluding header row)
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
};

module.exports = countStudents;
