export function pick() {
  // 1. Create and setup text layout elements if they do not exist
  let hslDiv = document.querySelector('.hsl');
  if (!hslDiv) {
    hslDiv = document.createElement('div');
    hslDiv.className = 'hsl';
    document.body.append(hslDiv);
  }

  let hueDiv = document.querySelector('.hue.text');
  if (!hueDiv) {
    hueDiv = document.createElement('div');
    hueDiv.className = 'hue text';
    document.body.append(hueDiv);
  }

  let lumDiv = document.querySelector('.luminosity.text');
  if (!lumDiv) {
    lumDiv = document.createElement('div');
    lumDiv.className = 'luminosity text';
    document.body.append(lumDiv);
  }

  // 2. Create SVG crosshair lines if they do not exist
  let svg = document.querySelector('svg');
  if (!svg) {
    svg = document.createElementNS('http://w3.org', 'svg');
    document.body.append(svg);
  }

  let axisX = document.getElementById('axisX');
  if (!axisX) {
    axisX = document.createElementNS('http://w3.org', 'line');
    axisX.setAttribute('id', 'axisX');
    svg.append(axisX);
  }

  let axisY = document.getElementById('axisY');
  if (!axisY) {
    axisY = document.createElementNS('http://w3.org', 'line');
    axisY.setAttribute('id', 'axisY');
    svg.append(axisY);
  }

  // Variables to hold the current raw string for copying on click
  let currentHslString = '';

  // 3. Track mouse movement to calculate colors and update layout positions
  window.addEventListener('mousemove', (e) => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Calculate Hue (0 - 360) and Luminosity (0 - 100) linearly
    const hue = Math.round((e.clientX / width) * 360);
    const luminosity = Math.round((e.clientY / height) * 100);

    currentHslString = `hsl(${hue}, 50%, ${luminosity}%)`;

    // Apply background color shift
    document.body.style.background = currentHslString;

    // Update screen labels
    hslDiv.textContent = currentHslString;
    hueDiv.textContent = `${hue}`;
    lumDiv.textContent = `${luminosity}`;

    // Update SVG crosshair positions (axisX is vertical, axisY is horizontal)
    axisX.setAttribute('x1', e.clientX);
    axisX.setAttribute('x2', e.clientX);
    axisX.setAttribute('y1', 0);
    axisX.setAttribute('y2', height);

    axisY.setAttribute('x1', 0);
    axisY.setAttribute('x2', width);
    axisY.setAttribute('y1', e.clientY);
    axisY.setAttribute('y2', e.clientY);
  });

  // 4. Handle copying the current color code to the clipboard on click
  window.addEventListener('click', async () => {
    if (currentHslString) {
      try {
        await navigator.clipboard.writeText(currentHslString);
      } catch (err) {
        // Fallback for older headless execution testing systems
        const textArea = document.createElement('textarea');
        textArea.value = currentHslString;
        document.body.append(textArea);
        textArea.select();
        navigator.clipboard.writeText(textToCopy);
        textArea.remove();
      }
    }
  });
}

// Call the function directly to begin initialization
pick();
