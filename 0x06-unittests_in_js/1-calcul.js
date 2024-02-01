
// The function rounds a and b and return the sum of it
function calculate(type, a, b) {
    // Ensure a and b are numbers
    if (typeof a !== 'number' || typeof b !== 'number') {
      return 'Error: Both a and b must be numbers';
    }
  
    // Round the numbers
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
        if (Math.round(b) === 0) {
          return 'Error: Division by zero';
        }
        return a / b;
      default:
        return 'Error: Invalid operation type';
    }
  }
  
  
  module.exports = calculate;
 