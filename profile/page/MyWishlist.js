import {menu} from "../component/profileMenu.js";
import navbar from "../../Navbar/navbar.js";

document.getElementById("navbar").innerHTML = navbar();




// console.log(menu());
document.querySelector(".profile-left-section").innerHTML=menu();


console.log("inside wish");
// Checking login ?
let log_status = localStorage.getItem("logged") || "";
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


// activate menu link
let allLink=document.querySelector("a");
allLink.style.color="#323232;"
let link=document.getElementById("wishlist-link");
link.style.color="#FF8BA5"
let user_id = localStorage.getItem("logged") || 1;
let url=`https://test-api-y3sx.onrender.com/users/${user_id}`;

document.getElementById('wish-back-to-home').addEventListener('click', backToHome);
function backToHome(){
  location.href="/index.html"
}

let WishListBag=JSON.parse(localStorage.getItem("mywishlistcart")) || [];
let cart=JSON.parse(localStorage.getItem("mycart")) || [];
console.log(WishListBag,cart);
get(url);
async function get(url) {
  try {
    let res=await fetch(url);
    let jsdata=await res.json();
    console.log(jsdata.wishList);
    WishListBag=jsdata.wishList;
    
    localStorage.setItem("mycart",JSON.stringify(jsdata.cart));
    localStorage.setItem("mywishlistcart",JSON.stringify(jsdata.wishList));
    showWishlist(jsdata.wishList,jsdata.cart);
  } catch (error) {
    console.log(error);
  }
}

let container = document.getElementById("wishlistContainer");

function showWishlist(product){
  console.log(product);
  container.innerHTML="";
  product.forEach((element,i)=> {
    let box=document.createElement("div");
    box.className="profile-right-wishlist-productDetails";

    let imgBox=document.createElement("div");
    imgBox.className="profile-right-wishlist-image";
    let img=document.createElement("img");
    img.src=element.img1;

    let title=document.createElement("p");
    title.innerText=element.title;

    imgBox.append(img,title);
     
    let DetailsBox=document.createElement("div");
    DetailsBox.className="profile-right-wishlist-Details";
    let rate=document.createElement("div");
    let text=document.createElement("p");
    let price=`<i class="fa fa-indian-rupee-sign"></i>${element.price2}`;
    text.innerHTML=price;
    rate.append(text);

    let size=document.createElement("div");
    let sizeSelect=`<select id="wishList-size">
                  <option value="">Select Size</option>
                  <option value="s">S</option>
                  <option value="m">M</option>
                  <option value="l">L</option>
                  <option value="xs">XS</option>
                  <option value="xl">XL</option>
                </select>`;
    size.innerHTML=sizeSelect;

    let buttonBox=document.createElement("div");

    // move______to__________Bag
    let addtoBag=document.createElement("button");
    addtoBag.innerText="ADD TO BAG";
    addtoBag.id="addToBag";
    addtoBag.addEventListener("click",function(){
      addToBag(element,i);
      
    })

    // Remove____from_______bag
    let remove=document.createElement("div");
    let icon=`<i class="fa fa-xmark"></i>`;
    remove.id="remove-wishlist";
    remove.innerHTML=icon;
    remove.addEventListener("click",function(){
      console.log(element);
      WishListBag.splice(i,1);
      console.log(WishListBag);
      showWishlist(WishListBag);
      
      localStorage.setItem("mywishlistcart",JSON.stringify(WishListBag));
      patchUser();
    })

    buttonBox.append(addtoBag,remove);
    DetailsBox.append(rate,size,buttonBox,remove);
    box.append(imgBox,DetailsBox);
    container.append(box);
  });
  
  
}

// Move________All______product to wishList
document.getElementById("addAll").addEventListener("click",MoveAllTocart)

function MoveAllTocart(){
console.log(WishListBag)
  WishListBag.forEach(element => {
    cart.push(element);
  });
  WishListBag=[];
  showWishlist(WishListBag);
  patchUser();
  
}

// add to bag

function addToBag(item,i){
  console.log(item);
  WishListBag.splice(i,1);
  cart.push(item);
  localStorage.setItem("mycart",JSON.stringify(cart));
  localStorage.setItem("mywishlistcart",JSON.stringify(WishListBag));
  patchUser();
  

  showWishlist(WishListBag);
}

async function patchUser(){
  try {
    let user =await fetch(`https://test-api-y3sx.onrender.com/users/${user_id}`,{
      method: "PATCH",
       headers: {
           "Content-Type":"application/json",
        },
        body:JSON.stringify({
          "cart": cart,
          "wishList":WishListBag
        }) 
    })
  } catch (error) {
    console.log(error)
  }
}