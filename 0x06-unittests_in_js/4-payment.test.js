// Stubs are similar to spies. Except that you can provide
// a different implementation of the function you are wrapping.
// Sinon can be used as well for stubs.

const sinon = require('sinon')
const assert = require('assert')

const Utils = require('./utils')
const sendPaymentRequestToApi = require('./4-payment')


describe('Test sendPaymentRequestToApi with Stub', () => {
    let calculateNumberStub
    let consoleLogNinja

    beforeEach(() => {
        // Stub Utils.calculateNumber to always return 10 and Spy on console.log to verify the message
        calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10)
        consoleLogNinja = sinon.spy(console, 'log')
    })

    afterEach(() => {
        // Restore the stub and spy after each test
        calculateNumberStub.restore()
        consoleLogNinja.restore()
    })

    it('should call Utils.calculateNumber with type = SUM, a = 100, b = 20', () => {
        sendPaymentRequestToApi(100, 20)

        assert(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20))
    })

    it('should log the correct message to the console', () => {
        sendPaymentRequestToApi(100, 20)

        assert(consoleLogNinja.calledOnceWithExactly('The total is: 10'))
    })
})
