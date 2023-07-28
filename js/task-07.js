const controlSize = document.getElementById("font-size-control");
controlSize.addEventListener("input", size);
const textSize = document.getElementById("text");

function size(evt) {
  const newSize = controlSize.value + "px";
  textSize.style.fontSize = newSize;
}
