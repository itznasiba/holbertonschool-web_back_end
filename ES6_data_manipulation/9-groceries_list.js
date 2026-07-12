#!/usr/bin/env node

/**
 * Creates and returns a map of grocery items and their quantities.
 * @returns {Map<string, number>} A Map containing grocery names and quantities.
 */
export default function groceriesList() {
  return new Map([
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5]
  ]);
}
