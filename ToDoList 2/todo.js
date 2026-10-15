const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");
const completed = document.class;
let x = 1

console.log(input, button, ul);

button.addEventListener("click", () => {

  if (input.value.trim() != ""){
  console.log(input.value);
  const newLi = document.createElement("li");
  newLi.className = x;
  newLi.innerText = input.value;
  ul.appendChild(newLi);
  const suppr = document.createElement("button");
  suppr.className = x;
  suppr.innerText = "supprimer";
  newLi.appendChild(suppr);
  }
  x += 1;
  input.value = "";
  // tentative infructureuse de faire supprimer les ToDo avec un bouton
  document.querySelector("button").onclick == function(){
    console.log("button")
  }
  document.querySelector("li:nth-child(1)").addEventListener("click", () => {
    const element = document.querySelector("li");
    element.remove();
  });
  // ducoup meme pas de tentative pour les ToDo validés 
  // (si je sais pas faire l'une je vais pas savoir faire l'autre hein)
});