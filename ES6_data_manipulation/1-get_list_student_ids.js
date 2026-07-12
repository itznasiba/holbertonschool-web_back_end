#!/usr/bin/env node

/**
 * Extracts IDs from a list of student objects.
 * @param {Array} students - The array of student objects.
 * @returns {Array<number>} An array of student IDs, or an empty array if the input is invalid.
 */

export default function getListStudentId(stduents) {
	if(!Array.isArray(students){
		return [];
	}
	return students.map((student)=>student.id);
}
