/**
 * document.createElement()
 * element.classList.add()
 * element.innerHTML
 * elemParent.appendChild(elemEnfant)
 * element.remove()
 * setTimeout()
 */

// 1. Je recupere le bouton
const btn = document.querySelector("button");
// 2. Je recupere le conteneur de toasts
const ctnToasts = document.querySelector(".container-toasts");

btn.addEventListener("click", save);

function save() {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = "<p>Votre fichier est enregistré !</p>";
  ctnToasts.appendChild(toast);

  setTimeout(function () {
    toast.remove();
  }, 3000);

  toast.addEventListener("click", function () {
    toast.remove();
  });
}
