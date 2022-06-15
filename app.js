let modal = document.getElementById("modal");
let open = document.getElementById("open");
let close = document.getElementById("close");

open.addEventListener("click", () => {
  modal.classList.add("show");
});

close.addEventListener("click", () => {
  modal.classList.remove("show");
});
