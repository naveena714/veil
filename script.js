const button = document.getElementById("enterBtn");
const veil = document.getElementById("veilScreen");
const reveal = document.getElementById("revealScreen");
const sparkleContainer = document.getElementById("sparkle-container");

// 🌸 Cursor sparkles
document.addEventListener("mousemove", (e) => {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";
  sparkle.style.left = e.clientX + "px";
  sparkle.style.top = e.clientY + "px";
  sparkleContainer.appendChild(sparkle);

  setTimeout(() => sparkle.remove(), 1000);
});

// 🌌 Button interaction
button.addEventListener("click", () => {
  button.innerText = "The Veil Opens…";

  veil.classList.add("fade");

  setTimeout(() => {
    reveal.classList.add("show");
  }, 2000);
});
