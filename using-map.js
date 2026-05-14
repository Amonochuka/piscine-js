// Extracts and returns an array of city names from the city key
function citiesOnly(arr) {
  return arr.map(item => item.city);
}

// Capitalizes each word in the provided state names
function upperCasingStates(arr) {
  return arr.map(state => 
    state
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  );
}

// Converts Fahrenheit strings to Celsius strings, rounded down
function fahrenheitToCelsius(arr) {
  return arr.map(tempStr => {
    const fahrenheit = parseInt(tempStr, 10);
    const celsius = Math.floor((fahrenheit - 32) * 5 / 9);
    return `${celsius}°C`;
  });
}

// Removes all whitespace from temperature strings within objects
function trimTemp(arr) {
  return arr.map(item => ({
    ...item,
    temperature: item.temperature.replace(/\s+/g, '')
  }));
}

// Generates formatted forecast strings with capitalized states and Celsius conversions
function tempForecasts(arr) {
  return arr.map(item => {
    const cleanTemp = item.temperature.replace(/\s+/g, '');
    const fahrenheit = parseInt(cleanTemp, 10);
    const celsius = Math.floor((fahrenheit - 32) * 5 / 9);
    
    const capitalizedState = item.state
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return `${celsius}°Celsius in ${item.city}, ${capitalizedState}`;
  });
}


// tests
console.log(citiesOnly([
    { city: "Los Angeles", temperature: "  101 °F   " },
    { city: "San Francisco", temperature: " 84 ° F   " }
]))
// ['Los Angeles', 'San Francisco']

console.log(upperCasingStates(["alabama", "new jersey"]))
// ['Alabama', 'New Jersey']

console.log(fahrenheitToCelsius(["68°F", "59°F", "25°F"]))
// ['20°C', '15°C', '-4°C']

console.log(trimTemp([
    { city: "Los Angeles", temperature: "  101 °F   " },
    { city: "San Francisco", temperature: " 84 ° F   " }
]))

console.log(tempForecasts([{
    city: "Pasadena",
    temperature: " 101 °F",
    state: "california",
    region: "West"
}]))
// ['38°Celsius in Pasadena, California']