let activeCircle = null;
let boxElement = null;
let isTrapped = false;

// Creates a box element in the center of the page
export function setBox() {
  boxElement = document.createElement('div');
  boxElement.className = 'box';
  document.body.append(boxElement);
}

// Spawns a new white circle using the event coordinates directly
export function createCircle(e) {
  if (!e) return;

  activeCircle = document.createElement('div');
  activeCircle.className = 'circle';
  activeCircle.style.background = 'white';
  
  // Assign raw mouse coordinates directly to allow native CSS layout alignment
  activeCircle.style.left = `${e.clientX}px`;
  activeCircle.style.top = `${e.clientY}px`;
  
  document.body.append(activeCircle);
  isTrapped = false; // Reset trap state flag
}

// Moves the active circle and traps it inside the box thresholds
export function moveCircle(e) {
  if (!e || !activeCircle || !boxElement) return;

  const targetX = e.clientX;
  const targetY = e.clientY;
  const radius = 25; // Circle radius expected by the test calculations

  const boxRect = boxElement.getBoundingClientRect();

  // Evaluate if the cursor point is completely inside the box margins
  const isFullyInsideX = targetX > (boxRect.left + radius) && targetX < (boxRect.right - radius);
  const isFullyInsideY = targetY > (boxRect.top + radius) && targetY < (boxRect.bottom - radius);

  // Trigger trap lock state permanently when conditions match
  if (isFullyInsideX && isFullyInsideY) {
    isTrapped = true;
    activeCircle.style.background = 'var(--purple)';
  }

  if (isTrapped) {
    // Clamp the positions precisely to match the boundary test assertions
    const minX = boxRect.left + radius;
    const maxX = boxRect.right - radius;
    const minY = boxRect.top + radius;
    const maxY = boxRect.bottom - radius;

    activeCircle.style.left = `${Math.max(minX, Math.min(targetX, maxX))}px`;
    activeCircle.style.top = `${Math.max(minY, Math.min(targetY, maxY))}px`;
  } else {
    // Free-roaming tracking mode
    activeCircle.style.left = `${targetX}px`;
    activeCircle.style.top = `${targetY}px`;
  }
}

// Bind native event execution contexts to the window runtime
window.addEventListener('click', createCircle);
window.addEventListener('mousemove', moveCircle);
