
document.addEventListener("DOMContentLoaded", function () {
    // Your cursor code here
    function reveal() {
        var reveals3 = document.querySelectorAll('.reveal3');
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
    document.getElementById('downloadBtn').addEventListener('click', function() {
        const fileUrl = 'my cv.pdf';  // PDF file in the same folder
    
        const a = document.createElement('a');
        a.href = fileUrl;
        a.download = 'CV.pdf';  // The filename when downloaded
    
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      });
    
    
    
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle");
    
    circles.forEach(function (circle) {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = "#ffffff"; // white
    });
    
    window.addEventListener("mousemove", function (e) {
      coords.x = e.clientX;
      coords.y = e.clientY;
    });
    
    function animateCircles() {
      let x = coords.x;
      let y = coords.y;
    
      circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";
        circle.style.scale = (circles.length - index) / circles.length;
        circle.style.opacity = (1 - index / circles.length).toFixed(2); // fading trail
    
        circle.x = x;
        circle.y = y;
    
        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });
    
      requestAnimationFrame(animateCircles);
    }
    
    animateCircles();
  });
/* on scroll animation */





