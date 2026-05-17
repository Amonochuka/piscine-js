// Returns all <a> tags vs all other tags in the document
export const getArchitects = () => {
  const architects = Array.from(document.getElementsByTagName('a'));
  const nonArchitects = Array.from(document.querySelectorAll('body *:not(a)'));
  return [architects, nonArchitects];
};

// Returns classical architects vs non-classical architects
export const getClassical = () => {
  const classical = Array.from(document.querySelectorAll('a.classical'));
  const nonClassical = Array.from(document.querySelectorAll('a:not(.classical)'));
  return [classical, nonClassical];
};

// Returns active classical architects vs inactive classical architects
export const getActive = () => {
  const activeClassical = Array.from(document.querySelectorAll('a.classical.active'));
  const inactiveClassical = Array.from(document.querySelectorAll('a.classical:not(.active)'));
  return [activeClassical, inactiveClassical];
};

// Returns the specific element for Bonanno Pisano vs all other active classical architects
export const getBonannoPisano = () => {
  const bonanno = document.getElementById('BonannoPisano');
  const others = Array.from(document.querySelectorAll('a.classical.active:not(#BonannoPisano)'));
  return [bonanno, others];
};
