import {menu} from "../component/profileMenu.js";
import navbar from "../../Navbar/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

// console.log(menu());
document.querySelector(".profile-left-section").innerHTML=menu();


// Checking login ?
let log_status = localStorage.getItem("logged") || "";
console.log(log_status);
if (log_status) {
  document.getElementById("login_box").innerHTML = `
    <select name="" id="profile_dropdown" >                
                 <option value="" ><a >Hi, There!</a> </option>
                 <option value="account" id="profile-path"><a href="/profile/page/profile.html">My account</a> </option>
                 <option value="order"><a href="#">My order</a></option>
                 <option value="logout">Log out</option>
               </select>`;
  // document
  //   .getElementById("profile_dropdown")
  //   .addEventListener("change", logout);
    document.getElementById('profile_dropdown').onchange = ()=>{
      let value = document.getElementById("profile_dropdown").value;
      if (value == "account"){
        location.href = "/profile/page/profile.html"

      }
      else if(value == "order"){
        location.href = "/profile/page/Myorder.html"
      }
      else if(value == "logout"){
        logout();
      }
      console.log("profile path")
    }
} else {
  document.getElementById("login_box").innerHTML = `
    <a href="#" id="login" class="link">|  Login </a>
    <a href="#" id="Signup" class="link">|  Sign up </a>`;
}




document.getElementById("profile-log").onclick = ()=>{
  logout();
  
}

document.querySelector(".add-to-logo").onclick = ()=>{
  window.location.href="/cartPage/html/cart.html";
}
// logout
function logout() {
  // if (document.getElementById("profile-log")) {
    // console.log("ho....");
    // if (value == "logout") {
    //   localStorage.setItem("logged", "");
    //   window.location.href="index.html"
    let id = localStorage.getItem("logged");
        localStorage.setItem("logged", "");
        console.log(id);
        postdata();
        async function postdata() {
          try {
            let res = await fetch(
              `https://test-api-y3sx.onrender.com/users/${id}`,
              {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  login_status: false,
                }),
              }
            );
            
          } catch (error) {
            console.log(error);
          }
        }
        localStorage.setItem('mycart', JSON.stringify([]));
         window.location.href="/index.html"
}

let itemcount= document.querySelector(".count");
let getcartitem= JSON.parse(localStorage.getItem("mycart"))  || [];

console.log(getcartitem.length)

if(getcartitem.length==0){
  itemcount.innerText= 0;
}else{
  itemcount.innerText = getcartitem.length;
}


// activate menu link
let allLink=document.querySelector("a");
allLink.style.color="#323232;"
let link=document.getElementById("contact-link");
link.style.color="#FF8BA5"