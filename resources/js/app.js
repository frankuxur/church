const navModalOpenBtns = Array.from(
  document.querySelectorAll(".nav__modal-open")
);
const navModalCloseBtns = Array.from(
  document.querySelectorAll(".nav__modal-close")
);
const navModals = Array.from(document.querySelectorAll(".nav__modal"));

// on clicking open btn
navModalOpenBtns.forEach((navModalOpenBtn) => {
  navModalOpenBtn.addEventListener("click", () => {
    let index = navModalOpenBtns.indexOf(navModalOpenBtn);

    openModal(index);
  });
});

// on clicking close btn
navModalCloseBtns.forEach((navModalCloseBtn) => {
  navModalCloseBtn.addEventListener("click", () => {
    let index = navModalCloseBtns.indexOf(navModalCloseBtn);

    closeModal(index);
  });
});

// open modal
function openModal(i) {
  document.querySelector(".nav__modals").classList.add("show");
  navModals[i].classList.add("show");
}

// close modal
function closeModal(i) {
  document.querySelector(".nav__modals").classList.remove("show");
  navModals[i].classList.remove("show");
}
