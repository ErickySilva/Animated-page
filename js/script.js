function createRose() {
  const rose = document.createElement("div");
  rose.classList.add("rose");
  rose.style.left = Math.random() * window.innerWidth + "px";
  rose.style.animationDuration = 3 + Math.random() * 5 + "s";

  document.querySelector(".roses").appendChild(rose);

  setTimeout(() => {
    rose.remove();
  }, 8000);
}

setInterval(createRose, 300);