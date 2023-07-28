function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const currentCol = document.querySelector(".color");
const randomCol = document.querySelector(".change-color");

randomCol.addEventListener("click", change);
function change(event) {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  currentCol.textContent = newColor;
}
