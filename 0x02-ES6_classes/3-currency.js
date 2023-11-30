export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // Getter and Setter for 'name'
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') throw new Error('Name must be a string');
    this._name = value;
  }

  // Getter and Setter for 'code'
  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value !== 'string') throw new Error('Code must be a string');
    this._code = value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
