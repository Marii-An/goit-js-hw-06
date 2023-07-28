const minusButton = document.querySelector(".js-minus");
const plusButton = document.querySelector(".js-plus");
const result = document.querySelector(".js-result");

let counterValue = 0;

function onClick() {
  result.textContent = counterValue;
}

minusButton.addEventListener("click", () => {
  counterValue -= 1;
  onClick();
});
onClick;
plusButton.addEventListener("click", () => {
  counterValue += 1;
  onClick();
});
