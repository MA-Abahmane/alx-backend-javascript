'use strict';
const chai = require('chai');

const calculateNumber = require('./2-calcul_chai.js');


describe('calculateNumber test', () => {
  it('checks the output', () => {
    chai.expect(calculateNumber('SUBTRACT', 2, 4.5)).to.equal(-3);
    chai.expect(calculateNumber('SUBTRACT', 4.5, 2)).to.equal(3);
    chai.expect(calculateNumber('SUBTRACT', -1.5, 0)).to.equal(-1);
    chai.expect(calculateNumber('SUBTRACT', -1, 1)).to.equal(-2);
    chai.expect(calculateNumber('SUBTRACT', 3.1, 2.5)).to.equal(0);
  });
});

describe('calculateNumber test', () => {
  it('checks the output', () => {
    chai.expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    chai.expect(calculateNumber('SUM', -1, 1)).to.equal(0);
    chai.expect(calculateNumber('SUM', 1, -1)).to.equal(0);
    chai.expect(calculateNumber('SUM', 0.0, 0)).to.equal(0);
    chai.expect(calculateNumber('SUM', 3.7, 1)).to.equal(5);
  });
});
