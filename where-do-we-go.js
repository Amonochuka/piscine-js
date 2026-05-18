import { places } from './where-do-we-go.data.js';

// Parses decimal degree strings or DMS strings accurately into comparable numeric floats
function parseLatitude(coordStr) {
  if (typeof coordStr === 'number') return coordStr;
  
  // Clean up whitespace tokens safely
  const cleanStr = coordStr.toString().trim();
  let decimalDegrees = 0;

  // Check if string follows a DMS format (contains degree symbols)
  if (cleanStr.includes('°')) {
    const parts = cleanStr.split(/[°′″'\s]+/);
    const degrees = parseFloat(parts[0]) || 0;
    const minutes = parseFloat(parts[1]) || 0;
    const seconds = parseFloat(parts[2]) || 0;
    
    decimalDegrees = degrees + (minutes / 60) + (seconds / 3600);
  } else {
    // Basic fallback parsing for native decimal strings
    decimalDegrees = parseFloat(cleanStr.replace(/[^0-9.-]/g, ''));
  }

  // Convert coordinate to a negative number if it belongs to the Southern hemisphere
  if (cleanStr.includes('S') || cleanStr.includes('s')) {
    return -decimalDegrees;
  }
  return decimalDegrees;
}

export function explore() {
  // 1. Sort the places from North to South (highest numeric latitude first)
  // FIX: Access .coordinates directly as a single string field without [0]
  const sortedPlaces = [...places].sort((a, b) => {
    return parseLatitude(b.coordinates) - parseLatitude(a.coordinates);
  });

  // 2. Generate fullscreen sections for each sorted destination
  sortedPlaces.forEach((place) => {
    const section = document.createElement('section');
    
    // Split by comma to isolate the city/landmark name string safely
    const primaryName = place.name.split(',')[0];

    // Clean structural symbols, unpack accent characters, and map spaces to hyphens
    const imgName = primaryName
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-');

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
    
    // Assuming coordinates are saved as a split pair or comma string in the dataset object
    // Handle split assignments uniformly for text visualization maps
    const coords = activePlace.coordinates.split(',');
    const lat = coords[0] ? coords[0].trim() : '';
    const lng = coords[1] ? coords[1].trim() : '';

    // Construct format strings separated by line breaks \n
    locationIndicator.textContent = `${activePlace.name}\n${activePlace.coordinates}`;
    locationIndicator.style.color = activePlace.color;
    locationIndicator.href = `https://google.com{encodeURIComponent(activePlace.coordinates)}`;
  }

  // 5. Connect tracking mechanics to document events
  window.addEventListener('scroll', updateIndicator);
  
  // Initialize values immediately on startup
  updateIndicator();
}
