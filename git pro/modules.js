export function add(a, b) {
    return a + b;
  }
  
  export function subtract(a, b) {
    return a - b;
  }
  
  
  // main.js
  import { add, subtract } from './mathOperations';
  
  // Example usage
  const result1 = add(10, 5);
  const result2 = subtract(10, 5);
  
  // Output
  console.log("Addition:", result1);
  console.log("Subtraction:", result2);