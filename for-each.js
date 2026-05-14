function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    // Native forEach ignores unassigned index keys in sparse arrays
    if (i in arr) {
      callback(arr[i], i, arr);
    }
  }
}

// const shoppingList = ['Apple', 'Milk', 'Bread'];

// // Define a callback function that handles the data
// function printItem(item, index) {
//   console.log(`${index + 1}. Buy: ${item}`);
// }

// // Call our custom implementation
// forEach(shoppingList, printItem);
