const dark = document.querySelector("#dark");

dark.addEventListener("click", function () {
  const body = document.querySelector("body");
  body.classList.toggle("darkmode");
});
