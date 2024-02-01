const assert = require('assert')

const calculateNumber = require('./0-calcul')


describe('Test calculateNumber', () => {

    it('float values passed (100.00, 70.00) => 170', () => {
        assert.strictEqual(calculateNumber(100.00, 70.00), 170)
    })

    it('float values passed (200.50, 10.20) => 211', () => {
        assert.strictEqual(calculateNumber(200.50, 10.20), 211)
    })

    it('float values passed (300.22, 70.22) => 370', () => {
        assert.strictEqual(calculateNumber(300.22, 70.22), 370)
    })

    it('float values passed (400.89, 20.78) => 422', () => {
        assert.strictEqual(calculateNumber(400.89, 20.78), 422)
    })

    it('float values passed (600.9001, 30.8888) => 632', () => {
        assert.strictEqual(calculateNumber(600.9001, 30.8888), 632)
    })

    it('float values passed (700.0987, 70.888) => 771', () => {
        assert.strictEqual(calculateNumber(700.0987, 70.888), 771)
    })

    it('float values passed (1.2, 3.7) => 5', () => {
        assert.strictEqual(calculateNumber(1.2, 3.7), 5)
    })


})
