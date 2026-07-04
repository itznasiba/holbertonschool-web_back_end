#!/usr/bin/node

/**
 * Represents an Airport.
 */
export default class Airport {
  /**
   * Creates a new Airport.
   * @param {String} name - The name of the airport.
   * @param {String} code - The code of the airport (e.g., SFO).
   */
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  /**
   * Modifies the default string description of the object.
   * Customizes [object Object] to [object CODE].
   */
  get [Symbol.toStringTag]() {
    return this._code;
  }

  /**
   * Overrides the toString method to customize the default string description.
   * @returns {String} The customized string format.
   */
  toString() {
    return `[object ${this._code}]`;
  }
}
