const userName = document.querySelector(".js-input");
const helloName = document.querySelector(".js-output");

userName.addEventListener("input", onInput);

function onInput(evt) {
  let typeName = evt.currentTarget.value.trim();
  if (typeName === "") {
    helloName.textContent = "Anonymous";
  } else {
    helloName.textContent = typeName;
  }
}
