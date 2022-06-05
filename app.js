const section = document.querySelector("section"),
  hireBtn = document.getElementById("hireBtn"),
  hireClose = document.querySelectorAll("#close");

hireBtn.addEventListener("click", () => {
  section.classList.add("show");
});

hireClose.forEach((cBtn) => {
  cBtn.addEventListener("click", () => {
    section.classList.remove("show");
  });
});
