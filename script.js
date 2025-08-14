function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
function generateColors() {
  const container = document.getElementById('colors');
  container.innerHTML = '';
  for (let i = 0; i < 5; i++) {
    const color = randomColor();
    const div = document.createElement('div');
    div.className = 'color-box';
    div.style.background = color;
    div.textContent = color;
    container.appendChild(div);
  }
}
document.getElementById('btn').addEventListener('click', generateColors);
generateColors();
