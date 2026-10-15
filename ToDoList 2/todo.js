const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

console.log(input, button, ul);

button.addEventListener("click", () => {

  if (input.value.trim() != ""){
    console.log(input.value);
    const newLi = document.createElement("li");
    newLi.innerText = input.value;
    ul.appendChild(newLi);

    const suppr = document.createElement("button");
    suppr.innerText = "supprimer";
    newLi.appendChild(suppr);

    input.value = "";

    suppr.addEventListener("click", () => {
      newLi.remove();
    });

    newLi.addEventListener("click", () => {
      newLi.classList.toggle("completed");
      console.log(newLi)
    });

  }
  
});