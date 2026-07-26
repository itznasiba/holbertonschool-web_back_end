import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    const dbFile = process.argv[2];

    return readDatabase(dbFile)
      .then((fields) => {
        const output = ['This is the list of our students'];

        const sortedFields = Object.keys(fields).sort((a, b) => (
          a.toLowerCase().localeCompare(b.toLowerCase())
        ));

        sortedFields.forEach((field) => {
          const names = fields[field];
          output.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        });

        return response.status(200).send(output.join('\n'));
      })
      .catch(() => response.status(500).send('Cannot load the database'));
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      return response.status(500).send('Major parameter must be CS or SWE');
    }

    const dbFile = process.argv[2];

    return readDatabase(dbFile)
      .then((fields) => {
        const names = fields[major] || [];
        return response.status(200).send(`List: ${names.join(', ')}`);
      })
      .catch(() => response.status(500).send('Cannot load the database'));
  }
}

export default StudentsController;
