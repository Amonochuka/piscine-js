// Constructs the tower brick by brick at a 100ms pacing interval
export function build(totalBricks) {
  let currentCount = 1;
  const body = document.querySelector('body');

  const intervalId = setInterval(() => {
    if (currentCount > totalBricks) {
      clearInterval(intervalId);
      return;
    }

    const brick = document.createElement('div');
    brick.id = `brick-${currentCount}`;

    // Columns follow a 3-turn pattern (Left, Middle, Right)
    // The middle column maps exactly to remains of: count % 3 === 2
    if (currentCount % 3 === 2) {
      brick.dataset.foundation = 'true';
    }

    body.append(brick);
    currentCount++;
  }, 100);
}

// Repairs individual bricks based on their column identity
export function repair(...brickIds) {
  brickIds.forEach((id) => {
    const brick = document.getElementById(id);
    if (!brick) return;

    // Check if the brick lives in the middle column via custom datasets
    if (brick.dataset.foundation === 'true') {
      brick.dataset.repaired = 'in progress';
    } else {
      brick.dataset.repaired = 'true';
    }
  });
}

// destroys the final block element from the building floor
export function destroy() {
  const bricks = document.querySelectorAll('div[id^="brick-"]');
  if (bricks.length === 0) return;

  const lastBrick = bricks[bricks.length - 1];
  lastBrick.remove();
}
