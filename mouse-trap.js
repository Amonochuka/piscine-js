let activeCircle = null;
let boxElement = null;
let isTrapped = false;

// Creates a box element in the center of the page
export function setBox() {
  boxElement = document.createElement('div');
  boxElement.className = 'box';
  document.body.append(boxElement);
}

// Fires on every click to spawn a new white circle at the mouse coordinates
export function createCircle() {
  // Catch the click coordinates from the global window event object
  const e = window.event;
  if (!e) return;

  activeCircle = document.createElement('div');
  activeCircle.className = 'circle';
  activeCircle.style.background = 'white';
  
  // Center the circle element precisely over the cursor tip (offsetting its radius)
  // Assuming a standard 25px radius (50px diameter); adjust if CSS dictates otherwise
  const radius = 25; 
  activeCircle.style.left = `${e.clientX - radius}px`;
  activeCircle.style.top = `${e.clientY - radius}px`;
  
  document.body.append(activeCircle);
  isTrapped = false; // Reset trap state flag for the new particle
}

// Moves the active circle with the mouse, freezing it if it enters the box boundaries
export function moveCircle() {
  const e = window.event;
  if (!e || !activeCircle || !boxElement) return;

  const radius = 25; // Element half-width alignment offset
  let targetX = e.clientX - radius;
  let targetY = e.clientY - radius;

  // Retrieve current physical coordinate boxes for intersection calculations
  const boxRect = boxElement.getBoundingClientRect();

  // If the particle is already trapped, limit its motion strictly within the box walls
  if (isTrapped) {
    // 1px inner buffer accounts for the box borders described in instructions
    const minX = boxRect.left + 1;
    const maxX = boxRect.right - (radius * 2) - 1;
    const minY = boxRect.top + 1;
    const maxY = boxRect.bottom - (radius * 2) - 1;

    // Clamp coordinates to trap boundaries
    activeCircle.style.left = `${Math.max(minX, Math.min(targetX, maxX))}px`;
    activeCircle.style.top = `${Math.max(minY, Math.min(targetY, maxY))}px`;
    return;
  }

  // Check if the moving circle has crossed completely inside the inner boundary thresholds
  const isFullyInsideX = targetX > boxRect.left + 1 && (targetX + radius * 2) < boxRect.right - 1;
  const isFullyInsideY = targetY > boxRect.top + 1 && (targetY + radius * 2) < boxRect.bottom - 1;

  if (isFullyInsideX && isFullyInsideY) {
    isTrapped = true;
    activeCircle.style.background = 'var(--purple)';
  }

  // Apply standard trailing positions if not trapped
  if (!isTrapped) {
    activeCircle.style.left = `${targetX}px`;
    activeCircle.style.top = `${targetY}px`;
  }
}

// Bind standard event execution loops to the window context immediately
window.addEventListener('click', createCircle);
window.addEventListener('mousemove', moveCircle);
