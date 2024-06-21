const container = document.getElementById('container');
const resetBtn = document.getElementById('reset-btn');

let gridSize = 16; // Initial grid size

function createGrid(size) {
  container.innerHTML = ''; // Clear existing grid
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const square = document.createElement('div');
      square.classList.add('grid-square');
      container.appendChild(square);
    }
  }
  addHoverEffect(); // Add hover effect after creating grid
}

function addHoverEffect() {
  const squares = document.querySelectorAll('.grid-square');
  squares.forEach(square => {
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = 'black'; // Change color on hover
    });
  });
}

createGrid(gridSize);

resetBtn.addEventListener('click', () => {
  let newSize = prompt('Enter new grid size (max 100):');
  newSize = Math.min(100, Math.max(1, parseInt(newSize))); // Limit input
  createGrid(newSize);
});
function addHoverEffect() {
    const squares = document.querySelectorAll('.grid-square');
    squares.forEach(square => {
      let darkenLevel = 0; // Track darkening level
      square.addEventListener('mouseover', () => {
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        square.style.backgroundColor = randomColor;
        darkenLevel = Math.min(1, darkenLevel + 0.1); // Limit darkening to 1
        square.style.opacity = darkenLevel;
      });
    });
  }
  