#!/usr/bin/env node

/**
 * Updates the quantity of all items in a map to 100 if their initial quantity is 1.
 * @param {Map} map - The map of grocery items to update.
 * @returns {Map} The updated map.
 * @throws {Error} Throws "Cannot process" if the argument is not a Map.
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [key, value] of map.entries()) {
    if (value === 1) {
      map.set(key, 100);
    }
  }

  return map;
}
