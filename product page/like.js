const hearticon = document.querySelector(".like-button .heart-icon");
console.log(hearticon)

hearticon.addEventListener("click", () => {
  hearticon.classList.toggle("liked");
});
