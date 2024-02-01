const sinon = require('sinon')
const assert = require('assert')

const Utils = require('./utils')
const sendPaymentRequestToApi = require('./3-payment')

describe('Test sendPaymentRequestToApi', () => {
    // set ninja to spy on Utils.calculateNumber
    const ninja = sinon.spy(Utils, 'calculateNumber')
    it('Utils.calculateNumber Validation', () => {

        // Call Utils.calculateNumber by sendPaymentRequestToApi
	    sendPaymentRequestToApi(700, 22.5)

        // asking ninja some questions
	    assert(ninja.calledOnce)
	    assert(ninja.calledWith('SUM', 700, 22.5))
	    ninja.restore()
    })
})
