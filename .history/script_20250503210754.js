
const cursorCircle = document.querySelector(".cursor-circle");

const headings = document.querySelectorAll(".cursor");

// Update circle position on mouse move
document.addEventListener("mousemove", (e) => {

const mouseX = e.clientX;
const mouseY = e.clientY;

// move the circle to the cursor position
cursorCircle.style.left =`${mouseX}px`;
cursorCircle.style.top =`${mouseY}px`;

// handle hover effect on the heading
headings.forEach(heading => {
    heading.addEventListener("mouseenter",()=> {
    cursorCircle.style.width ="320px";
    cursorCircle.style.height ="320px";
    });

    heading.addEventListener("mouseleave",()=> {
        cursorCircle.style.width ="25px";
        cursorCircle.style.height ="25px";
        });
    });
});

/* on scroll animation */

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
    a.download = 'myfile.pdf';  // The filename when downloaded

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });


