#!/usr/bin/node
import Currency from './3-currency.js';

/**
 * Represents the Pricing of an item.
 */
export default class Pricing {
  /**
   * Creates a new Pricing instance.
   * @param {Number} amount - The amount of the price.
   * @param {Currency} currency - The currency associated with the price.
   */
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // --- Amount Getter & Setter ---
  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  // --- Currency Getter & Setter ---
  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = value;
  }

  /**
   * Returns the price formatted as "amount currency_name (currency_code)".
   * @returns {String} The formatted price string.
   */
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  /**
   * Static method to convert a price using a given conversion rate.
   * @param {Number} amount - The initial amount.
   * @param {Number} conversionRate - The conversion rate.
   * @returns {Number} The converted amount.
   */
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
