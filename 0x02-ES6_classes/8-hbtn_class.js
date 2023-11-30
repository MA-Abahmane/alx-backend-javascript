export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  toString() {
    // String conversion
    return this._location;
  }

  valueOf() {
    // Numeric conversion
    return this._size;
  }
}
