import {menu} from "../component/profileMenu.js";
// console.log(menu());
document.querySelector(".profile-left-section").innerHTML=menu();

// activate menu link
let allLink=document.querySelector("a");
allLink.style.color="#323232;"
let link=document.getElementById("credit-link");
link.style.color="#FF8BA5"