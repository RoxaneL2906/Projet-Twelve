/*
Nouvelles compétences:
- forEach
- querySelectorAll
*/

const bouton = document.querySelector(".btn");
bouton.addEventListener("click", dark);

function dark() {
  const allTags = document.querySelectorAll("*");
  const icon = document.querySelector(".icon");

  allTags.forEach(function (balise) {
    balise.classList.toggle("darkmode");
  });

  icon.classList.toggle("fa-sun");
  icon.classList.toggle("fa-moon");
}
