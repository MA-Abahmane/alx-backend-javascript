// Look into how to support async testing, for example when waiting for the answer of an API or from a Promise

const getPaymentTokenFromAPI = (success) =>
{
    return new Promise((resolve, reject) =>
    {
        if (success) {
            resolve({data: 'Successful response from the API' })
        }
    })
}

module.exports = getPaymentTokenFromAPI
