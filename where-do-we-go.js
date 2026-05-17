import { places } from './where-do-we-go.data.js';

// Helper function to convert coordinate strings into numeric floats
function parseLatitude(coordStr) {
  if (typeof coordStr === 'number') return coordStr;
  
  // Extract index 0 if it's passed as an array, or process the string directly
  const str = Array.isArray(coordStr) ? coordStr[0] : coordStr;
  const cleanStr = str.toString().trim();
  const numericValue = parseFloat(cleanStr.replace(/[^0-9.-]/g, ''));
  
  // If the coordinate belongs to the Southern hemisphere, convert it to a negative number
  if (cleanStr.includes('S') || cleanStr.includes('s')) {
    return -numericValue;
  }
  return numericValue;
}

export function explore() {
  // 1. Sort the places from North to South (highest numeric latitude first)
  const sortedPlaces = [...places].sort((a, b) => {
    return parseLatitude(b.coordinates) - parseLatitude(a.coordinates);
  });

  // 2. Generate fullscreen sections for each sorted destination
  sortedPlaces.forEach((place) => {
    const section = document.createElement('section');
    
    // FIX: Always split by comma to isolate the city/landmark name.
    // This perfectly matches the file names on the server (e.g., 'Lisse', 'Skaftá River')
    const primaryName = place.name.split(',')[0];

    // Sanitize accented/special characters and format matching names to file strings
    const imgName = primaryName
      .toLowerCase()
      .normalize('NFD') // Unpacks accented letters into raw characters + diacritics
      .replace(/[\u0300-\u036f]/g, '') // Strips out the accent characters
      .replace(/[^a-z0-9\s-]/g, '') // Cleans remaining punctuation safely
      .trim()
      .replace(/\s+/g, '-'); // Translates all whitespace tokens uniformly to hyphens

    section.style.background = `url('./where-do-we-go_images/${imgName}.jpg')`;
    section.style.backgroundSize = 'cover';
    section.style.backgroundPosition = 'center';
    section.style.height = '100vh';
    
    document.body.append(section);
  });

  // 3. Create the anchor tag location indicator overlay
  const locationIndicator = document.createElement('a');
  locationIndicator.className = 'location';
  locationIndicator.target = '_blank';
  document.body.append(locationIndicator);

  // 4. Create the directional compass overlay
  const directionIndicator = document.createElement('div');
  directionIndicator.className = 'direction';
  document.body.append(directionIndicator);

  // Keep track of the last scroll position to identify scroll directions
  let lastScrollY = window.scrollY;

  // Helper updater to keep indicator content fully in sync
  function updateIndicator() {
    const currentScrollY = window.scrollY;
    const viewHeight = window.innerHeight;
    
    // Determine scroll direction (N = up, S = down)
    if (currentScrollY > lastScrollY) {
      directionIndicator.textContent = 'S';
    } else if (currentScrollY < lastScrollY) {
      directionIndicator.textContent = 'N';
    }
    lastScrollY = currentScrollY;

    // Calculate current section using viewport center crossing mechanics
    const viewportCenter = currentScrollY + (viewHeight / 2);
    const activeIndex = Math.floor(viewportCenter / viewHeight);
    const safeIndex = Math.max(0, Math.min(activeIndex, sortedPlaces.length - 1));
    
    const activePlace = sortedPlaces[safeIndex];
    const [lat, lng] = activePlace.coordinates;

    // Construct format strings separated by line breaks \n
    locationIndicator.textContent = `${activePlace.name}\n${lat}, ${lng}`;
    locationIndicator.style.color = activePlace.color;
    locationIndicator.href = `https://google.com{lat},${lng}`;
  }

  // 5. Connect tracking mechanics to document events
  window.addEventListener('scroll', updateIndicator);
  
  // Initialize values immediately on startup
  updateIndicator();
}
