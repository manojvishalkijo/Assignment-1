function greet(name) {
    console.log("Hello, " + name + "!");
  }
  
  // Function Expression
  const add = function (a, b) {
    return a + b;
  };
  
  // Arrow Function
  const multiply = (a, b) => a * b;
  
  // Function Invocation
  greet("John");
  
  const sum = add(5, 3);
  console.log("Sum:", sum);
  
  const product = multiply(4, 6);
  console.log("Product:", product);