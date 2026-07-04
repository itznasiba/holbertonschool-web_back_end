#!/usr/bin/node

/**
 * Represents a Car.
 */
export default class Car {
  /**
   * Creates a new Car.
   * @param {String} brand - The brand of the car.
   * @param {String} motor - The motor type of the car.
   * @param {String} color - The color of the car.
   */
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  /**
   * Defines the species symbol behavior for the class.
   * Returns the current constructor function.
   */
  static get [Symbol.species]() {
    return this;
  }

  /**
   * Clones the current car into a new instance of its specific class.
   * @returns {Object} A new instance of the current instance's class type.
   */
  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}
