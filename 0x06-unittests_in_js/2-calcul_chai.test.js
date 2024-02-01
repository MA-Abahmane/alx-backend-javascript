const expect = require('chai').expect

const calculateNumber = require("./2-calcul_chai.js")


describe('Test calculateNumber V2 with chai', () => {
  it("Test SUM operation", () => {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    expect(calculateNumber('SUM', 5.5, 2.5)).to.equal(8);
    expect(calculateNumber('SUM', -3, 7)).to.equal(4);
  });

  it("Test SUBTRACT operation", () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-3);
    expect(calculateNumber('SUBTRACT', 10, 5)).to.equal(5);
    expect(calculateNumber('SUBTRACT', -5, -3)).to.equal(-2);
  });

  it("Test DIVIDE operation", () => {
    expect(calculateNumber('DIVIDE', 5, 2)).to.equal(2.5);
    expect(calculateNumber('DIVIDE', 9, 3)).to.equal(3);
    expect(calculateNumber('DIVIDE', -6, 2)).to.equal(-3);
  });
});


describe('Test Error cases', () => {
  it("Test Error case - Division by zero", () => {
    expect(() => calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });

  it("Test Error case - Invalid operation type", () => {
    expect(() => calculateNumber('DIVIDES', 1, 1)).to.equal(0);
  });
});
