#!/usr/bin/env node

/**
 * Creates an Int8 typed array inside an ArrayBuffer at a specific position.
 * @param {number} length - The size of the ArrayBuffer.
 * @param {number} position - The index position to insert the value.
 * @param {number} value - The Int8 value to insert.
 * @returns {DataView} A DataView pointing to the created ArrayBuffer.
 * @throws {Error} Throws "Position outside range" if the position is out of bounds.
 */
export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);

  view.setInt8(position, value);

  return view;
}
