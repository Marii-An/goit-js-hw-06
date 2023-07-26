// Task 1

const list = document.querySelector("#categories");

const items = list.querySelectorAll(".js-main-item");

console.log("Number of categories:", items.length);

items.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  const categoryElements = item.querySelectorAll("li");
  console.log("Category:", categoryName);
  console.log("Elements:", categoryElements.length);
});

//Task 2

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const container = document.querySelector("#ingredients");
for (ingredient of ingredients) {
  const li = document.createElement("li");
  li.textContent = ingredient;
  container.append(li);
  li.classList.add("item");
}

console.log(container);

// Task 3

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".js-gallery");

const markup = images
  .map(
    ({ url, alt }) => `<li>
    <img class="imgs" src="${url}" alt="${alt}">
</li >`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

// Task 4

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

// Task 5
const userName = document.querySelector(".js-input");
const helloName = document.querySelector(".js-output");

userName.addEventListener("input", onInput);

function onInput(evt) {
  let typeName = evt.currentTarget.value;
  if (typeName === "") {
    helloName.textContent = "Anonymous";
  } else {
    helloName.textContent = typeName;
  }
}
