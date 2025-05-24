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


var lang = {
  "html": "100%",
  "css": "90%",
  "javascript": "70%",
  "php": "55%",
  "angular": "65%"
};

var multiply = 4;

$.each( lang, function( language, pourcent) {

  var delay = 700;
  
  setTimeout(function() {
    $('#'+language+'-pourcent').html(pourcent);
  },delay*multiply);
  
  multiply++;

});