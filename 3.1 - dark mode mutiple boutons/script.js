
//1. Je recupere tous les switchs
const allButtons = document.querySelectorAll(".btn");
//2. Je recupere tous les elements html de ma page
const allElements = document.querySelectorAll("*");
//3. Je parcours tous les switchs
allButtons.forEach(function(button) {
    button.addEventListener("click", dark);
});

function dark() {
  allElements.forEach(function (balise) {
    balise.classList.toggle("darkmode");
  });

  const icons = document.querySelectorAll(".icon");
  icons.forEach(function(icon) {
    icon.classList.toggle("fa-sun");
    icon.classList.toggle("fa-moon");
  });
}
