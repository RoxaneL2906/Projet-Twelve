/*
Nouvelles compétences:
 - Font awesome
 - type Boolean
 - if else
 - HTMLElement.classList
    - toggle Inverse l'etat de la classe : present ou pas
    * add
    * remove
    * replace
*/

// 1. Je recupere l'icone smiley
const smiley = document.getElementById("emoji");

// 2. Je recupere le bouton ABONNER
const bouton = document.querySelector(".btn-sub");

// 3. Je défini une variable binaire qui exprime l'etat abonné ou non de l'utilisateur
let subscribed = false;

// 4. J'ecoute le clique sur l'icone smiley
smiley.addEventListener("click", like);

function like() {
    smiley.classList.toggle("fa-face-meh");
    smiley.classList.toggle("fa-face-smile");
    smiley.classList.toggle("happy");
}

// 5. J'ecoute l'evenemment click sur le bouton ABONNEZ
bouton.addEventListener("click", function () {
  subscribed = !subscribed;

  bouton.classList.toggle("abonne", subscribed);
  bouton.innerText = subscribed ? "Vous êtes abonné" : "Abonnez-vous";
});
