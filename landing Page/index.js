// Navbar JS________________________
window.onscroll = function () {
  myFunction()
};

var navbarDiv = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
//read more_________________________________________
document.getElementById("button_toreadmore").addEventListener("click", readMore);

function readMore() {
  var dots = document.getElementById("dotss");
  var moreText = document.getElementById("read_more");
  var btnText = document.getElementById("button_toreadmore");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

// SlideShow JS_______________________
let slideIndex = 0;
let slideInterval;
showSlides();

document.getElementById("next").addEventListener("click", function () {
  plusSlides(1);
  clearInterval(slideInterval);
  slideInterval = setInterval(showSlides, 5000);
});

document.getElementById("prev").addEventListener("click", function () {
  plusSlides(-1);
  clearInterval(slideInterval);
  slideInterval = setInterval(showSlides, 5000);
});

let dots = document.getElementsByClassName("dot");
for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function () {
    currentSlide(i + 1);
    clearInterval(slideInterval);
    slideInterval = setInterval(showSlides, 5000);
  });
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  slides[slideIndex - 1].style.display = "block";
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex - 1].className += " active";
}

slideInterval = setInterval(showSlides, 5000);

