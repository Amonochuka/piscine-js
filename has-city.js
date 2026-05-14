function hasCity(country, cities) {
  return function(city) {
    if (cities.includes(city)) {
      return `${city} is a city from ${country}`;
    } else {
      return `${city} is not a city from ${country}`;
    }
  };
}

const isFrenchCity = hasCity("France", ["Paris", "Lyon", "Marseille"]);

isFrenchCity("Paris"); // -> "Paris is a city from France"
isFrenchCity("Berlin"); // -> "Berlin is not a city from France"