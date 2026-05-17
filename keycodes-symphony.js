export function compose() {
  document.addEventListener('keydown', (event) => {
    const key = event.key;

    // 1. Handle lowercase letters (a-z)
    if (/^[a-z]$/.test(key)) {
      const note = document.createElement('div');
      note.className = 'note';
      note.textContent = key;

      // Generate a predictable, unique color using the character's ASCII code
      const charCode = key.charCodeAt(0);
      const hue = ((charCode - 97) * (360 / 26)) % 360; 
      note.style.backgroundColor = `hsl(${hue}, 75%, 60%)`;

      document.body.append(note);
    } 
    // 2. Handle Backspace (Delete last note)
    else if (key === 'Backspace') {
      const notes = document.querySelectorAll('.note');
      if (notes.length > 0) {
        notes[notes.length - 1].remove();
      }
    } 
    // 3. Handle Escape (Clear all notes)
    else if (key === 'Escape') {
      const notes = document.querySelectorAll('.note');
      notes.forEach(note => note.remove());
    }
  });
}
