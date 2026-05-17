import { colors } from './fifty-shades-of-cold.data.js';

// Generates an inline style block inside the document head containing all colors
export function generateClasses() {
  const style = document.createElement('style');
  let cssRules = '';

  colors.forEach((color) => {
    cssRules += `.${color} { background: ${color}; }\n`;
  });

  style.textContent = cssRules;
  document.head.append(style);
}

// Generates div items for colors matching "cold" keyword filters
export function generateColdShades() {
  const body = document.querySelector('body');
  const coldKeywords = ['aqua', 'blue', 'turquoise', 'green', 'cyan', 'navy', 'purple'];

  colors.forEach((color) => {
    // Check if the color name contains any of our cold indicators
    const isCold = coldKeywords.some((keyword) => color.includes(keyword));

    if (isCold) {
      const div = document.createElement('div');
      div.className = color;
      div.textContent = color;
      
      // Bind click handler to trigger the choseShade logic
      div.addEventListener('click', () => choseShade(color));
      
      body.append(div);
    }
  });
}

// Replaces all current classes on color blocks with the chosen shade selection
export function choseShade(shade) {
  const divs = document.querySelectorAll('body > div');
  
  divs.forEach((div) => {
    // Replace the existing color class with the single selected shade class string
    div.className = shade;
  });
}
