const checkName = document.querySelector(".js-check");
checkName.addEventListener("blur", symbols);
const checkValid = document.getElementById("validation-input");
const perfectName = parseInt(checkValid.getAttribute("data-length"));

function symbols(evt) {
  let inputName = evt.currentTarget.value;
  if (inputName.length === perfectName) {
    checkValid.classList.add("valid");
    checkValid.classList.remove("invalid");
  } else {
    checkValid.classList.add("invalid");
    checkValid.classList.remove("valid");
  }
}
