const assert = require('assert')

const getPaymentTokenFromAPI = require('./6-payment_token')


describe('Test getPaymentTokenFromAPI', () => {
    it('should return a resolved promise with a successful response when success is true', (done) => {
        // Act
        getPaymentTokenFromAPI(true)
            // Call done to signal the end of the asynchronous test
            .then((response) => {
                assert.deepStrictEqual(response, { data: 'Successful response from the API' })
                done() 
            })
            // Call done with an error if the promise is rejected
            .catch((error) => {
                done(error) 
            })
    })

})
