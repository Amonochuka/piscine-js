import { places } from './where-do-we-go.data.js';

// Fully parses DMS (Degrees-Minutes-Seconds) and Decimal Degree strings into standard numeric floats
function parseLatitude(coordStr) {
  if (typeof coordStr === 'number') return coordStr;
  
  // Extract coordinate string from array references if wrapped
  const rawStr = Array.isArray(coordStr) ? coordStr[0] : coordStr;
  const cleanStr = rawStr.toString().trim();
  
  let decimalDegrees = 0;

  // Check if string follows a DMS format (contains degree symbols)
  if (cleanStr.includes('°')) {
    // Split text by measurement token dividers
    const parts = cleanStr.split(/[°′″'\s]+/);
    const degrees = parseFloat(parts[0]) || 0;
    const minutes = parseFloat(parts[1]) || 0;
    const seconds = parseFloat(parts[2]) || 0;
    
    decimalDegrees = degrees + (minutes / 60) + (seconds / 3600);
  } else {
    // Standard basic fallback for native decimal strings
    decimalDegrees = parseFloat(cleanStr.replace(/[^0-9.-]/g, ''));
  }

  // Convert to negative value if the location belongs to the Southern hemisphere
  if (cleanStr.includes('S') || cleanStr.includes('s')) {
    return -decimalDegrees;
  }
  return decimalDegrees;
}

export function explore() {
  // 1. Sort the places from North to South using our high-precision coordinate parser
  const sortedPlaces = [...places].sort((a, b) => {
    return parseLatitude(b.coordinates[0]) - parseLatitude(a.coordinates[0]);
  });

  // 2. Generate fullscreen sections for each sorted destination
  sortedPlaces.forEach((place) => {
    const section = document.createElement('section');
    
    // Always split by comma to match the server asset naming structure
    const primaryName = place.name.split(',')[0];

    // Clean strings, unpack accent characters, and map spaces to hyphens
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
