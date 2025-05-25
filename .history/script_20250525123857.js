/* on scroll animation */
function reveal() {
  var reveals3 = document.querySelectorAll(".reveal3");
  for (var i = 0; i < reveals3.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals3[i].getBoundingClientRect().top;
    var elementVisible = 50;
    if (elementTop < windowHeight - elementVisible) {
      reveals3[i].classList.add("active3");
    } else {
      reveals3[i].classList.remove("active3");
    }
  }
}
// Also run reveal() on scroll
window.addEventListener("scroll", reveal);

//download CV
document.getElementById("downloadBtn").addEventListener("click", function () {
  const fileUrl = "my cv.pdf"; // PDF file in the same folder

  const a = document.createElement("a");
  a.href = fileUrl;
  a.download = "CV.pdf"; // The filename when downloaded

  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});



document.addEventListener("DOMContentLoaded", function () {
  const logo = document.getElementById("android-logo");
  logo.classList.add("animate-on-load");
});



var wordsToType = document
    .querySelector("span[words]")
    .getAttribute("words")
    .split(","),
  typer = document.querySelector("span[words]"),
  typingSpeed = parseInt(typer.getAttribute("typing-speed")) || 70,
  typingDelay = parseInt(typer.getAttribute("typing-delay")) || 900;

var currentWordIndex = 0,
  currentCharacterIndex = 0;

function type() {
  var wordToType = wordsToType[currentWordIndex % wordsToType.length];

  if (currentCharacterIndex < wordToType.length) {
    typer.innerHTML += wordToType[currentCharacterIndex++];
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, typingDelay);
  }
}
function erase() {
  var wordToType = wordsToType[currentWordIndex % wordsToType.length];
  if (currentCharacterIndex > 0) {
    typer.innerHTML = wordToType.substr(0, --currentCharacterIndex - 1);
    setTimeout(erase, typingSpeed);
  } else {
    currentWordIndex++;
    setTimeout(type, typingDelay);
  }
}

window.onload = function () {
  type();
};
