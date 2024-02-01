
// Spies are a useful wrapper that will execute the wrapped function, and log useful information (e.g. was it called, with what arguments). Sinon is a library allowing you to create spies.
class Utils 
{
    static calculateNumber(type, a, b)
    {

        a = Math.round(a);
        b = Math.round(b);

        // Perform the specified operation
        switch (type) {
        case 'SUM':
            return a + b;
        case 'SUBTRACT':
            return a - b;
        case 'DIVIDE':
            // Check if b is rounded to 0 to avoid division by zero
            if (b === 0) {
            return 'Error';
            }
            return a / b;
        default:
            return 0;
        }
    }
}


module.exports = Utils;
