import navbar from "../../Navbar/navbar.js";

document.getElementById("navbar").innerHTML = navbar();


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
let link=document.getElementById("address-link");
link.style.color="#FF8BA5"
console.log("hfduhs");

// Show_Adress form_____-_____-
document.getElementById("add-Address").addEventListener("click",() => {
 
  document.getElementById("hidden_form").style.display="block"
 
})




let user_id = localStorage.getItem("logged") || 1
// form submit part

document.getElementById("add-address-btn").addEventListener("click",function (e) {
event.preventDefault()
  console.log("hii");
  let obj={
      fname:document.getElementById("fname").value,
      lname:document.getElementById("ph").value,
      pin:document.getElementById("pin").value,
      address:document.getElementById("address").value,
      cntry:document.getElementById("cntry").value,
  }

  getAdress(obj)
});


getAdress()
// getting Data from server
async function getAdress(obj){
  console.log(obj,user_id)
  try {
    let user =await fetch(`https://test-api-y3sx.onrender.com/users/${user_id}`);
    let userArr = await user.json();
    let adress = userArr.address;
    if(obj){
      adress.push(obj)
    }
    
    console.log(adress)
    displayAdress(adress)
  patchAdress(adress)
  document.getElementById("hidden_form").style.display="none"
  } catch (error) {
    console.log("get data erorr")
  }
}

function displayAdress(data){
  document.querySelector("#adress_show").textContent=""
data.map(function(ele){
  console.log(ele)
  let box = document.createElement("div")
  let name = document.createElement("span")
  name.textContent=ele.fname || "name"
  let adres = document.createElement("p")
  adres.textContent=ele.address+" "+ ele.cntry + " " +ele.pin
  let mob = document.createElement("p")
  mob.textContent=ele.lname
  box.append(name,adres,mob)
  document.querySelector("#adress_show").append(box)
})
}

// Patch adress
async function patchAdress(adress){
    console.log(adress);
    try {
      let user =await fetch(`https://test-api-y3sx.onrender.com/users/${user_id}`,{
        method: "PATCH",
         headers: {
             "Content-Type":"application/json",
          },
          body:JSON.stringify({
            "address": adress
          }) 
      })
    } catch (error) {
      console.log(error)
    }
  }


            


















// import {menu} from "../component/profileMenu.js";
// // console.log(menu());
// document.querySelector(".profile-left-section").innerHTML=menu();

// // activate menu link
// let allLink=document.querySelector("a");
// allLink.style.color="#323232;"
// let link=document.getElementById("address-link");
// link.style.color="#FF8BA5"


// // let address=[];

// let submit=document.getElementById("add-address-btn");
// let adress = [];



// async function getAdress(){
//   try {
//     let user =await fetch(`https://test-api-y3sx.onrender.com/users/2`);
//     let userArr = await user.json();
//     adress = userArr.address;
//     console.log(userArr.address); 
//     console.log(adress)   
//   } catch (error) {
    
//   }
// }

// getAdress();

// async function patchAdress(){
//     console.log(adress);
//     try {
//       let user =await fetch(`https://test-api-y3sx.onrender.com/users/2`,{
//         method: "PATCH",
//          headers: {
//              "Content-Type":"application/json",
//           },
//           body:JSON.stringify({
//             "address": adress
//           }) 
//       })
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   submit.addEventListener("click",function () {
//     console.log("hii");
//     let obj={
//         fname:document.getElementById("fname").value,
//         lname:document.getElementById("ph").value,
//         pin:document.getElementById("pin").value,
//         address:document.getElementById("address").value,
//         cntry:document.getElementById("cntry").value,
//     }
   
//    adress.push(obj);
//     patchAdress();
// })

// // async function get(obj) {
// //     console.log(obj)
// //   try {
// //     let res=await fetch(`https://test-api-y3sx.onrender.com/users/2`);
// //     let dt=await res.json();
// //     console.log(dt);
// //     let address=dt.address;
   
// //     address.push(obj)
// //     console.log(address);
// //     // patchAdd(address)
// //   } catch (error) {
// //     console.log(error);
// //   }
// // }

// // async function patchAdd(address){

// //     console.log(address)
// //     try {
// //       let user =await fetch(`https://test-api-y3sx.onrender.com/users/2`,{
// //         method: "PATCH",
// //         headers: {
// //             "Content-Type":"application/json",
// //          },
// //          body:JSON.stringify({
// //            "address": address
// //          }) 
// //     })
// //     }catch (error) {
// //       console.log(error)
// //     }
// //   }
            
