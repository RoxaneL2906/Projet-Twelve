/**
 * removeEventListener
 * Scroll Event
 */

// 1. Je recupere la section à partir de laquelle je veux faire apparaite la modale
const section3 = document.querySelector(".three");

// 2. Je recupere la modale
const modal = document.querySelector(".modal");
// 3. Je recupere le bouton quitter de la modale
const modalQuit = document.querySelector(".modal-quit");

// 4. Je lance la fonction onScrollDisplayModal sur l'evenement scroll de la fenetre
window.addEventListener("scroll", onScrollDisplayModal);

// 5. Je fais disparaite la modale au clique sur la croix
modalQuit.addEventListener("click", function () {
  modal.classList.remove("show");

  window.removeEventListener("scroll", onScrollDisplayModal);
});

/**
 *  Fonction à passer en parametre de addEventListener("scroll",function)
 *  Obligatoire pour pouvoir utiliser removeEventListener(function)
 */
function onScrollDisplayModal() {
  const position = document.documentElement.scrollTop;
  const positionSection3 = section3.offsetTop;

  if (position - positionSection3 > 0) {
    modal.classList.add("show");
  }
}
