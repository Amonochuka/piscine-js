let activeCircle = null;
let boxElement = null;
let isTrapped = false;

// Creates a box element in the center of the page
export function setBox() {
  boxElement = document.createElement('div');
  boxElement.className = 'box';
  document.body.append(boxElement);
}

// Spawns a new white circle, manually offsetting it by 25px radius to center it under the cursor
export function createCircle(e) {
  if (!e) return;

  activeCircle = document.createElement('div');
  activeCircle.className = 'circle';
  activeCircle.style.background = 'white';
  
  // Subtract the 25px radius so the center of the circle aligns with the mouse position metrics
  activeCircle.style.left = `${e.clientX - 25}px`;
  activeCircle.style.top = `${e.clientY - 25}px`;
  
  document.body.append(activeCircle);
  isTrapped = false; // Reset trap threshold state
}

// Moves the active circle with the mouse, switching to a locked state if it enters the trap box
export function moveCircle(e) {
  if (!e || !activeCircle || !boxElement) return;

  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const radius = 25; // Circle radius required by test calculations

  const boxRect = boxElement.getBoundingClientRect();

  // If the circle has hit the trap state, clamp its center coordinates inside the inner box bounds
  if (isTrapped) {
    const minX = boxRect.left + radius;
    const maxX = boxRect.right - radius;
    const minY = boxRect.top + radius;
    const maxY = boxRect.bottom - radius;

    // Clamp mouse positions and apply the 25px visual render offset
    const clampedX = Math.max(minX, Math.min(mouseX, maxX));
    const clampedY = Math.max(minY, Math.min(mouseY, maxY));

    activeCircle.style.left = `${clampedX - radius}px`;
    activeCircle.style.top = `${clampedY - radius}px`;
    return;
  }

  // The condition matches if the cursor coordinates are completely clear of the box boundaries
  const isFullyInsideX = mouseX > (boxRect.left + radius) && mouseX < (boxRect.right - radius);
  const isFullyInsideY = mouseY > (boxRect.top + radius) && mouseY < (boxRect.bottom - radius);

  if (isFullyInsideX && isFullyInsideY) {
    isTrapped = true;
    activeCircle.style.background = 'var(--purple)';
    
    // Lock down visual layout coordinates instantly
    activeCircle.style.left = `${mouseX - radius}px`;
    activeCircle.style.top = `${mouseY - radius}px`;
  } else {
    // Normal trailing position track mapping
    activeCircle.style.left = `${mouseX - radius}px`;
    activeCircle.style.top = `${mouseY - radius}px`;
  }
}

// Bind native event context parameters into the window runtime framework
window.addEventListener('click', createCircle);
window.addEventListener('mousemove', moveCircle);
