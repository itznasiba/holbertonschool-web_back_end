#!/usr/bin/env node

/**
 * Checks if all elements in an array exist within a given set.
 * @param {Set} set - The set to look inside.
 * @param {Array} array - The array containing values to check.
 * @returns {boolean} True if all array elements are in the set, false otherwise.
 */
export default function hasValuesFromArray(set, array) {
  return array.every((element) => set.has(element));
}
