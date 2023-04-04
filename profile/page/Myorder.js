import {menu} from "../component/profileMenu.js";
import navbar from "../../Navbar/navbar.js";
// console.log(menu());

document.getElementById("navbar").innerHTML = navbar();

document.querySelector(".profile-left-section").innerHTML=menu();

// activate menu link
let allLink=document.querySelector("a");
allLink.style.color="#323232;"
let link=document.getElementById("order-link");
link.style.color="#FF8BA5"