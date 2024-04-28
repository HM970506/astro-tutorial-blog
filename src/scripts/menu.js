document.querySelector(".menu").addEventListener("click", () => {
  if (document.querySelector(".visible"))
    document.querySelector(".visible").className = "unvisible";
  else document.querySelector(".unvisible").className = "visible";
});
