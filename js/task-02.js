const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const container = document.querySelector("#ingredients");
for (let ingredient of ingredients) {
  const li = document.createElement("li");
  li.textContent = ingredient;
  container.append(li);
  li.classList.add("item");
}

console.log(container);
