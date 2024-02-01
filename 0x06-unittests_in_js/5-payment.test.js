const sinon = require('sinon')
const assert = require('assert')

const sendPaymentRequestToApi = require('./5-payment')


describe('Test sendPaymentRequestToApi with Hooks', () => {
    let consoleLogNinja

    beforeEach(() => {
        // Spy on console.log before each test
        consoleLogNinja = sinon.spy(console, 'log')
    })

    afterEach(() => {
        consoleLogNinja.restore()
    })

    it('should log the correct message to the console for totalAmount=100, totalShipping=20', () => {
        sendPaymentRequestToApi(100, 20)

        assert(consoleLogNinja.calledOnceWithExactly('The total is: 120'))
    })

    it('should log the correct message to the console for totalAmount=10, totalShipping=10', () => {
        sendPaymentRequestToApi(10, 10)

        assert(consoleLogNinja.calledOnceWithExactly('The total is: 20'))
    })
})
;;.