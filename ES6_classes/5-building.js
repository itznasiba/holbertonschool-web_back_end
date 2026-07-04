#!/usr/bin/node

/**
 * Represents an abstract Building.
 */
export default class Building {
  /**
   * Creates a new Building.
   * @param {Number} sqft - The square footage of the building.
   */
  constructor(sqft) {
    if (this.constructor !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  // --- Sqft Getter ---
  get sqft() {
    return this._sqft;
  }
}
