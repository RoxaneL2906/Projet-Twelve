const modal = document.querySelector(".modal");

function timeout() {
  modal.classList.add("show");
}

setTimeout(timeout, 3000);

const modalQuit = document.querySelector(".modal-quit");
modalQuit.addEventListener("click", function () {
  modal.classList.remove("show");
});
