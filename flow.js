function flow(funcs) {
  return function(...args) {
    if (funcs.length === 0) return undefined;
    
    // Execute the first function with all incoming arguments
    let result = funcs[0](...args);
    
    // Pass the running result through the rest of the functions
    for (let i = 1; i < funcs.length; i++) {
      result = funcs[i](result);
    }
    
    return result;
  };
}
