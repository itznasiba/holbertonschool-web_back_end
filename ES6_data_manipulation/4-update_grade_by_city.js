#!/usr/bin/env node

/**
 * Updates the grades of students in a specific city.
 * @param {Array} students - The array of student objects.
 * @param {string} city - The city to filter by.
 * @param {Array} newGrades - Array of grade objects containing studentId and grade.
 * @returns {Array<Object>} An array of student objects with updated grades.
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      // Find the grade object for the current student
      const gradeObj = newGrades.find((g) => g.studentId === student.id);
      
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}
