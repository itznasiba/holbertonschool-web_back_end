#!/usr/bin/env node

/**
 * Creates a Set from an array of elements.
 * @param {Array} array - The array to convert.
 * @returns {Set} A Set containing the unique elements from the array.
 */
export default function setFromArray(array) {
  return new Set(array);
}
