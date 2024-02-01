
const expect = require('chai').expect


describe('Some Random Tests to skip', () => {
  it('1 === 1', () => {
    expect(1 === 1).to.be.true
  })

  it('2 === 2', () => {
    expect(2 === 2).to.be.true
  })

  it.skip('1 === 3', () => {
    expect(1 === 3).to.be.true
  })

  it('3 === 3', () => {
    expect(3 === 3).to.be.true
  })

  it('4 === 4', () => {
    expect(4 === 4).to.be.true
  })

  it('5 === 5', () => {
    expect(5 === 5).to.be.true
  })

  it('6 === 6', () => {
    expect(6 === 6).to.be.true
  })

  it('7 === 7', () => {
    expect(7 === 7).to.be.true
  })
})
