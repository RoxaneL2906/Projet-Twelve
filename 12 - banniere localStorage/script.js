/**
 * localStorage
 * setItem()
 * getItem()
 * Fonctionnement de Stockage et des cookies
 */

// 1. Je recupere le bouton "Accepter les cookies"
const bouton = document.querySelector(".btn-accept");

// 2. Je recupere la banniere de cookies
const banner = document.querySelector(".cookies");

if (localStorage.getItem("cookie") == "true") {
  banner.remove();
} else {
  banner.classList.add("show");
  // 3. J'ecoute l'evenement "click" sur le bouton "Accepter les cookies"
  bouton.addEventListener("click", disappear);
  function disappear() {
    banner.classList.add("fade-out");
    localStorage.setItem("cookie", "true");
  }
}
