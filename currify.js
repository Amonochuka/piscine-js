function currify(func) {
  return function curried(...args) {
    // If we have enough arguments, execute the original function
    if (args.length >= func.length) {
      return func(...args);
    }
    
    // Otherwise, return a new function that accepts the next argument
    return function(nextArg) {
      return curried(...args, nextArg);
    };
  };
}

// A regular function that calculates total delivery cost
const calcShipping = (baseRate, weight, distance) => baseRate + (weight * distance);
console.log(calcShipping.length); // Output: 3 (Expects 3 arguments)

// Transform it into a curried version
const curriedShipping = currify(calcShipping);

// Execute it step-by-step
const customRate = curriedShipping(10); // Base rate set to 10
const withWeight = customRate(5);        // Weight set to 5
const finalPrice = withWeight(2);        // Distance set to 2 -> Resolves!

console.log(finalPrice); 
