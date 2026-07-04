#!/usr/bin/node
import Building from './5-building.js';

/**
 * Represents a high-rise building that extends Building.
 */
export default class SkyHighBuilding extends Building {
  /**
   * Creates a new SkyHighBuilding.
   * @param {Number} sqft - The square footage of the building.
   * @param {Number} floors - The number of floors in the building.
   */
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  // --- Sqft Getter ---
  get sqft() {
    return this._sqft;
  }

  // --- Floors Getter ---
  get floors() {
    return this._floors;
  }

  /**
   * Returns the evacuation warning message for the building.
   * @returns {String} The formatted evacuation warning message.
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
