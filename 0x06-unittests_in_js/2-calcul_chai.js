
// An upgrade of the function created in the previous task
function calculateNumber(type, a, b) {

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


module.exports = calculateNumber;
