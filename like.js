const hearticon = document.querySelector(".like-button .heart-icon");
console.log(hearticon)

hearticon.addEventListener("click", () => {
  hearticon.classList.toggle("liked");
});
// hearticon.onclick=function() {
//     console.log("hii")
//     hearticon.classList.toggle("liked");
// }