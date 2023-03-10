window.onload= function(){
  showCartItem();
}
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


// ____________________________cart no._updating cart length____________________________//


function showCartItem(){
let itemcount= document.getElementById("count");
let getcartitem= localStorage.getItem("cart") ||[];

if(getcartitem.length==0){
  itemcount.innerText=0;
}else{
  itemcount.innerText= getcartitem.length;
}
}

// ______________________newsletter________________//

document.getElementById("email_subscribe").addEventListener("click" , alertbox);
function alertbox(){
var text = document.getElementById("input_email").value;
  if(text.length === 0){
    alert("Please Enter Your Email");
  }
  else{
    alert("ThankYou "+ text +" for Signing Up!");
  }
}

// ____________________________________search Query________________________//
// let searchInput_value= document.getElementById("inputSearch");
// // searchInput_value.addEventListener("oninput", function(){
// //   debounce(getSuggestions, 1000);
// // })
// function myFunc5(){
//   console.log("hi")
// }

// //debounce function...........
// let timerId;

// function debounce(func, delay) {
//     console.log("debounce executed");
//     let search_word = document.getElementById("inputSearch").value;
//     if (timerId) {
//         clearTimeout(timerId);
//     }
//     timerId = setTimeout(() => {
//         getSuggestions(search_word);
//     }, delay)
// }

// //getting suggestions......
// async function getSuggestions(searchWord) {
//     try {
//         let data = await getData();

//         if (data.Response === 'True') {
//             let dropdown = document.getElementById("dropdown");
//             dropdown.innerHTML = "";
//             data.Search.map((product) => {
//                 let option = document.createElement("option");
//                 option.setAttribute("class", "option__option")

//                 option.value = product.Title;

//                 dropdown.append(option);
//                 // displayData(product);   redirect to the prod details page.......................

//             })
//         } else {
//             console.log(data.Error);
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }
// // URL: https://test-api-y3sx.onrender.com/products  ///////////////
// //fetching url and sending the data............
// async function getData() {
//     let search_word = document.getElementById("search").value;
//     let url = `https://test-api-y3sx.onrender.com/products`;
//     try {
//         let res = await fetch(url);
//         let data1 = await res.json();
//         console.log(data1);
//         return data1;
//     } catch (error) {
//         console.log(error);
//     }
// }


// //getting fetched data ...........
// async function init() {
//     try {
//         let data = await getData();
//         let search_word = document.getElementById("inputSearch").value;
//         if (search_word === "") {
//             let dropdown = document.getElementById("dropdown");
//             dropdown.innerHTML = "No such Product";
//         }
//     } catch (error) {
//         console.log(error);
//     }

// }
