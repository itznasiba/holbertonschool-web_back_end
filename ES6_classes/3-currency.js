#!/usr/bin/node

/**
 * Represents a Currency.
 */
export default class Currency {
  /**
   * Creates a new Currency.
   * @param {String} code - The currency code (e.g., EUR, USD, $).
   * @param {String} name - The name of the currency (e.g., Euro, Dollars).
   */
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // --- Code Getter & Setter ---
  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  // --- Name Getter & Setter ---
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  /**
   * Returns the currency name and code formatted as "name (code)".
   * @returns {String} The formatted string.
   */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
