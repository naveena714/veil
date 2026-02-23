const button = document.getElementById("enterBtn");

button.addEventListener("click", () => {
  document.body.style.transition = "all 2s ease";
  document.body.style.background = "radial-gradient(circle at center, #2b004f, #000)";
  button.innerText = "The Veil Opens...";
});
