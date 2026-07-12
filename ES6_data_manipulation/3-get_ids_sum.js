#!/usr/bin/env node

/**
 * Calculates the sum of all student IDs.
 * @param {Array} students - The array of student objects.
 * @returns {number} The sum of all student IDs.
 */
export default function getStudentIdsSum(students) {
  return students.reduce((accumulator, student) => accumulator + student.id, 0);
}
