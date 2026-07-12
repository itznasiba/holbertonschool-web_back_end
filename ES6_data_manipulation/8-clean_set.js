#!/usr/bin/env node

/**
 * Returns a string of all set values that start with a specific string,
 * appending only the remainder of the matching strings separated by a hyphen.
 * @param {Set<string>} set - The set of strings to evaluate.
 * @param {string} startString - The prefix to look for.
 * @returns {string} The formatted string of remaining substrings.
 */
export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string' || startString.length === 0) {
    return '';
  }

  const parts = [];

  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      parts.push(value.slice(startString.length));
    }
  }

  return parts.join('-');
}
