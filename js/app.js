"use strict";
const modal = document.querySelector(".modal");

const closeModalCross = document.querySelector(".close-modal");

const btnsOpenModal = document.querySelectorAll(".show-modal");

const listener = function (str, str1) {
  str.addEventListener("click", str1);
};

function closeModal() {
  modal.classList.add("hidden");
}
function openModal() {
  modal.classList.remove("hidden");
}

console.log(btnsOpenModal);
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", function () {
    openModal();
  });
}
listener(closeModalCross, closeModal);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
    console.log(event);
  }
});
