const assert = require('assert')

const calculateNumber = require("./1-calcul.js");


describe('Test calculateNumber V2', () => {

    it("float values passed ('SUM', 1.4, 4.5) => 6", () => {
        assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6)
    })

    it("float values passed ('SUBTRACT', 1.4, 4.5) => -4", () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4)
    })

    it("float values passed ('DIVIDE', 1.4, 4.5) => 0.2", () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2)
    })

    it("float values passed ('DIVIDE', 1.4, 0) => 'Error'", () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error')
    })

    it("float values passed ('DIVIDES', 1, 1) => 'Error'", () => {
        assert.strictEqual(calculateNumber('DIVIDES', 1, 1), 0)
    })

    it("float values passed ('SUM', 700.0987, 70.888) => 771", () => {
        assert.strictEqual(calculateNumber('SUM', 700.0987, 70.888), 771)
    })

    it("float values passed ('SUBTRACT', 0, 0) => 0", () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0)
    })

})
