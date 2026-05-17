export function generateLetters() {
  const body = document.querySelector('body');
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const totalLetters = 120;

  for (let i = 1; i <= totalLetters; i++) {
    const div = document.createElement('div');
    
    // 1. Pick a random uppercase letter
    const randomIndex = Math.floor(Math.random() * letters.length);
    div.textContent = letters[randomIndex];

    // 2. Calculate linear font-size from 11px up to 130px
    // Using linear interpolation: start + (index / total_steps) * (end - start)
    const fontSize = 11 + ((i - 1) / (totalLetters - 1)) * (130 - 11);
    div.style.fontSize = `${fontSize}px`;

    // 3. Apply font-weight tiers based on position index
    if (i <= 40) {
      div.style.fontWeight = '300';
    } else if (i <= 80) {
      div.style.fontWeight = '400';
    } else {
      div.style.fontWeight = '600';
    }

    body.append(div);
  }
}
