
let modals = document.querySelectorAll(".modal");
modals = [...modals];

modals.forEach(modal => {
  let overlay = modal.querySelector(".modal-overlay");

  overlay.addEventListener("click", () => {
    console.log("overlay clicked")
    modal.classList.add("hidden");
  })

  overlay.firstElementChild.addEventListener("click", (e) => {
    e.stopPropagation();
  })
})

function closeModal(modalId) {
  let modal = document.getElementById(modalId);
  modal.classList.add("hidden");
}

function openModal(modalId) {
  let modal = document.getElementById(modalId);
  modal.classList.remove("hidden");
}