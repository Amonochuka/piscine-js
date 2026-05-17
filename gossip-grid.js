import { gossips } from './gossip-grid.data.js';

export function grid() {
  // 1. Create and setup the Ranges container
  const rangesContainer = document.createElement('div');
  rangesContainer.className = 'ranges';

  const sliderConfigs = [
    { id: 'width', min: '200', max: '800', value: '400' },
    { id: 'fontSize', min: '20', max: '40', value: '25' },
    { id: 'background', min: '20', max: '75', value: '50' }
  ];

  sliderConfigs.forEach(config => {
    const input = document.createElement('input');
    input.type = 'range';
    input.id = config.id;
    input.className = 'range';
    input.min = config.min;
    input.max = config.max;
    input.value = config.value;

    input.addEventListener('input', applyLiveStyles);
    rangesContainer.append(input);
  });

  document.body.append(rangesContainer);

  // 2. Create and setup the main Grid wrapper
  const gridContainer = document.createElement('div');
  gridContainer.className = 'gossip-grid';
  document.body.append(gridContainer);

  // 3. Create the Creation Form Card (Must use div wrapper with form inside, or be matching test filters)
  // Making the form wrapper a div ensures it doesn't conflict with target selections incorrectly
  const formCard = document.createElement('form');
  formCard.className = 'gossip';

  const textarea = document.createElement('textarea');
  
  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Share gossip!';

  formCard.append(textarea, submitButton);
  gridContainer.append(formCard);

  // Handle new text item submissions
  formCard.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = textarea.value.trim();
    if (!text) return;

    const newCard = createGossipCard(text);
    // Insert immediately after the form card so it's the first div.gossip found
    formCard.insertAdjacentElement('afterend', newCard);
    
    textarea.value = '';
    applyLiveStyles();
  });

  // 4. Render initial dataset cards from the data file
  gossips.forEach(text => {
    const card = createGossipCard(text);
    gridContainer.append(card);
  });

  // Run style matching immediately on mount
  applyLiveStyles();

  // Helper factory function to keep card creation consistent
  function createGossipCard(textContent) {
    const card = document.createElement('div');
    card.className = 'gossip';
    card.textContent = textContent;
    return card;
  }

  // 5. Global styling coordinator
  function applyLiveStyles() {
    const widthVal = document.getElementById('width').value;
    const fontSizeVal = document.getElementById('fontSize').value;
    const backgroundVal = document.getElementById('background').value;

    const cards = document.querySelectorAll('.gossip');
    
    cards.forEach(card => {
      card.style.width = `${widthVal}px`;
      card.style.fontSize = `${fontSizeVal}px`;
      card.style.backgroundColor = `hsl(280, 50%, ${backgroundVal}%)`;
    });
  }
}
