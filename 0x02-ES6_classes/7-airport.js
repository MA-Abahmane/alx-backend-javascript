export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  toString() {
    // String conversion
    return `[object ${this._code}]`;
  }
}
