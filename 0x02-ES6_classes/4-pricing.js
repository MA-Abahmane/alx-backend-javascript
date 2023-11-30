import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // Getter and Setter for 'amount'
  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value !== 'number') throw TypeError('Amount must be a number');
    this._amount = value;
  }

  // Getter and Setter for 'currency'
  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (!(value instanceof Currency)) throw TypeError('currency must be an instance of Currency');
    this._currency = value;
  }

  // Display
  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  // static method
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
