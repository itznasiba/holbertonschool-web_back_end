#!/usr/bin/node

/**
 * Represents a Holberton Class.
 */
export default class HolbertonClass {
  /**
   * Creates a new HolbertonClass.
   * @param {Number} size - The size of the class.
   * @param {String} location - The location of the class.
   */
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  /**
   * Handles type conversion for the class instance.
   * @param {String} hint - The expected type conversion ('number', 'string', or 'default').
   * @returns {Number|String} The size when cast to a number, or location when cast to a string.
   */
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }
    if (hint === 'string') {
      return this._location;
    }
    return this._location; // Default fallback
  }
}
