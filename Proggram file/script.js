const texts = [
  "BUILDING AI EXPERIENCES",
  "CREATIVE MACHINE INTELLIGENCE",
  "FUTURE-READY TECHNOLOGY"
];

let index = 0;
let char = 0;
const typing = document.getElementById("typing");

function typeText() {
  if (char < texts[index].length) {
    typing.textContent += texts[index][char];
    char++;
    setTimeout(typeText, 80);
  } else {
    setTimeout(eraseText, 2000);
  }
}

function eraseText() {
  if (char > 0) {
    typing.textContent = texts[index].substring(0, char - 1);
    char--;
    setTimeout(eraseText, 40);
  } else {
    index = (index + 1) % texts.length;
    setTimeout(typeText, 500);
  }
}

typeText();

/* Mouse Glow Effect */
document.addEventListener("mousemove", e => {
  document.documentElement.style.setProperty(
    "--mouse-x", `${e.clientX}px`
  );
  document.documentElement.style.setProperty(
    "--mouse-y", `${e.clientY}px`
  );
});
