import { places } from './where-do-we-go.data.js';

export function explore() {
  // 1. Sort the places from North to South (highest latitude first) using index 0
  const sortedPlaces = [...places].sort((a, b) => b.coordinates[0] - a.coordinates[0]);

  // 2. Generate fullscreen sections for each sorted destination
  sortedPlaces.forEach((place) => {
    const section = document.createElement('section');
    
    // Split by comma to extract only the location name part, dropping country qualifiers if present
    const rawName = place.name.includes(',') ? place.name.split(',')[0] : place.name;

    // Sanitize accented/special characters and format matching names to file strings
    const imgName = rawName
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
