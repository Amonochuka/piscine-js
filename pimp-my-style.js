import { styles } from './pimp-my-style.data.js';

// Counter to track our position in the styles array
let currentIndex = 0;
// Direction state: false = adding classes, true = removing classes (unpimping)
let isUnpimping = false;

export function pimp() {
  const button = document.querySelector('button.button');
  if (!button) return;

  if (!isUnpimping) {
    // 1. Add the next styling class
    button.classList.add(styles[currentIndex]);
    currentIndex++;

    // 2. If we just added the very last style, transition to the unpimping phase
    if (currentIndex === styles.length) {
      isUnpimping = true;
      button.classList.add('unpimp');
    }
  } else {
    // 3. Remove the current styling class in Last-In, First-Out (LIFO) order
    currentIndex--;
    button.classList.remove(styles[currentIndex]);

    // 4. If we just removed the very first style, transition back to the adding phase
    if (currentIndex === 0) {
      isUnpimping = false;
      button.classList.remove('unpimp');
    }
  }
}
