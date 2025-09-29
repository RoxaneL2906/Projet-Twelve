/*
Nouvelles compétences:
- querySelector // Selectionne le premier element seulement mieux que getElementsBy
- HTMLElement.style 
*/

// 1. Je recupere le bouton "Accepter les cookies"
const bouton = document.querySelector(".btn-accept");

// 2. Je recupere la banniere de cookies
const banner = document.querySelector(".cookies");

// 3. J'ecoute l'evenement "click" sur le bouton "Accepter les cookies"
bouton.addEventListener("click",disappear);
function disappear (){
    banner.classList.add("fade-out");
}