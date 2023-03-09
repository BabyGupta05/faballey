import { navbar, footer } from "./navbar.js";

document.getElementById('navbar').innerHTML = navbar();
document.getElementById('footer').innerHTML = footer();

document.querySelector("#child2 :nth-child(1) a").style.color = "#fc6486"
document.querySelector("#child2 :nth-child(1) i").style.color = "#fc6486"

document.getElementById('bag-navbar').addEventListener('click',()=>{
  location.href = "shipping.html"
})


let id = 2;

// let Procuctsssarray = JSON.parse(localStorage.getItem("mycart")) || [];
let temp = [{
  "id": 1,
  "uniqueId": 1,
  "category": "tops",
  "length": "regullar",
  "sleeves": "sleeveless",
  "title": "Pink White Floral Ruffle Sleeve Peplum Top",
  "color":"pink",
  "discount": 56,
  "price2": 1450,
  "price1": 638,
  "site": "https://www.faballey.com/pink-white-floral-ruffle-sleeve-peplum-top-78/prdt",
  "img1": "https://img.faballey.com/images/Product/TOP05210Z/1.jpg",
  "img2": "https://img.faballey.com/images/Product/TOP05210Z/d4.jpg",
  "img3": "https://img.faballey.com/images/Product/TOP05210Z/d5.jpg",
  "img4": "https://img.faballey.com/images/Product/TOP05210Z/d8.jpg"
},
{
  "id": 2,
  "uniqueId": 2,
  "category": "tops",
  "length": "crop",
  "sleeves": "short",
  "title": "Pink Floral Smocked Peplum Top",
  "color":"pink",
  "discount": 56,
  "price2": 1650,
  "price1": 726,
  "site": "https://www.faballey.com/floral-pink-smoking-top-78/prdt",
  "img1": "https://img.faballey.com/images/Product/TOP04999Z/1.jpg",
  "img2": "https://img.faballey.com/images/Product/TOP04999Z/d5.jpg",
  "img3": "https://img.faballey.com/images/Product/TOP04999Z/d8.jpg",
  "img4": "https://img.faballey.com/images/Product/TOP04999Z/d4.jpg"
}];

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
//   try {
//     let user =await fetch(`https://test-api-y3sx.onrender.com/users/2`,{
//       method: "PATCH",
//        headers: {
//            "Content-Type":"application/json",
//         },
//         body:JSON.stringify({
//           "address": adress
//         }) 
//     })
//   } catch (error) {
//     console.log(error)
//   }
// }


// let button = document.createElement('button');
// button.textContent = "button"
// button.addEventListener("click", ()=>{  
//   adress.push("hii");
//   patchAdress();
// })
// document.getElementById("button").append(button);

let proctArray = JSON.parse(localStorage.getItem('mycart')) || [];

proctArray.forEach(function (elem) {
  elem.quantity = 1;
});
console.log(proctArray)
localStorage.setItem("mycart", JSON.stringify(proctArray));

async function getUser(){
  try {
    let user =await fetch(`https://test-api-y3sx.onrender.com/users/${id}`);
    let userArr =await user.json();
    // proctArray = userArr.cart;
    // console.log(userArr.cart);
    localStorage.setItem("mycart", JSON.stringify(userArr.cart))
    // console.log(proctArray, "inside get")
  } catch (error) {
    console.log(error)
  }
}
getUser();
displayCart(proctArray);

console.log(proctArray,"outside")
// let user = {
//   "firstName": "",
//   "lastName": "",
//   "Gender": "",
//   "DOB": "",
//   "ph": "1234567899",
//   "mail": "",
//   "Password": "Sueuxi",
//   "login_status": false,
//   "address": [],
//   "cart": [{
//     "id": 1,
//     "uniqueId": 1,
//     "category": "tops",
//     "length": "regullar",
//     "sleeves": "sleeveless",
//     "title": "Pink White Floral Ruffle Sleeve Peplum Top",
//     "color":"pink",
//     "discount": 56,
//     "price2": 1450,
//     "price1": 638,
//     "site": "https://www.faballey.com/pink-white-floral-ruffle-sleeve-peplum-top-78/prdt",
//     "img1": "https://img.faballey.com/images/Product/TOP05210Z/1.jpg",
//     "img2": "https://img.faballey.com/images/Product/TOP05210Z/d4.jpg",
//     "img3": "https://img.faballey.com/images/Product/TOP05210Z/d5.jpg",
//     "img4": "https://img.faballey.com/images/Product/TOP05210Z/d8.jpg"
//   }],
//   "wishList": [],
//   "id": 2
// }

// proctArray = user.cart;


// console.log(proctArray);


// localStorage.setItem("mycart", JSON.stringify(temp));





// localStorage.setItem("mycart", JSON.stringify(Procuctsssarray));

// console.log(Procuctsssarray)

// if(proctArray.length === 0){
//   document.getElementById('mainbox12').innerHTML = `<div id="empty-cart">
//   <div class="cntshop2">
//       <a href="#"><i class="fa fa-caret-left"></i>Continue Shopping</a>
//   </div>

// <div class="noItembox"><img src="https://www.faballey.com/images/emtBag.png" alt="empty bag">
//   <p>There are no products in your bag.</p>
//   <a href="#">+Add products from wishlist</a>
// </div>
// </div>`
// }
// else{
//   getUser();
// }




function displayCart(temp) {
  console.log(temp)
  let product=document.getElementById("productBox")
  product.innerHTML=""
  document.getElementById('cartcount').textContent =temp.length;
  temp.map(function(elem,i){
    let box=document.createElement("div")
    box.id="box-box"
    let box1=document.createElement("div")
    box1.id="box1"
    let box11=document.createElement("div")
    box11.id="box11"
    let box1a=document.createElement("div")
    box1a.id="box1a"
    let boxprice=document.createElement("div")
    boxprice.id="boxprice"
    let boxbottom=document.createElement("div")
    boxbottom.id="boxbottom"

    let itemImage = document.createElement('div');
    itemImage.className = "item-image"
    let image=document.createElement("img")
    image.src=elem.img1
    image.className="boximage"
    itemImage.append(image);

    let name=document.createElement("p")
    name.id="boxname"
    name.innerText=elem.title

    let size=document.createElement("p")
    // size.id="box-grey"
    size.innerText="Size: M";
    let SKU = document.createElement("p");
    SKU.id="box-grey"
    SKU.textContent = "SKU CODE : SWT00154C";

    let quantity= document.createElement("select")
    quantity.id= "qty"
    quantity.style.cursor="pointer"
    let option = document.createElement("option");
    option.value = "";
    option.text = "QTY";
    option.innerText="QTY"
    quantity.append(option)

    for (let i = 1; i <= 10; i++) {
      let option = document.createElement("option");
      option.value = i;
      option.text = i;
      quantity.append(option);
    }
    let quantitytxt= document.createElement("p")
    quantitytxt.className= "qtytxt"
    // quantitytxt.id= "box-grey"
    quantitytxt.textContent="Qty : "+elem.quantity

    let color = document.createElement('p');
    color.textContent ="Color : "+ elem.color;

    let itemDet = document.createElement('div');
    itemDet.className = "item-specs"
    itemDet.append(size,quantitytxt, quantity , color);

    box1a.append(name,itemDet,SKU)
    
    let price1 = document.createElement("p")
    price1.id="boxprice1"
    price1.textContent = "₹"+elem.price1;


    let price2 = document.createElement("p");
    price2.style.textDecoration = "line-through";
    price2.id="boxprice2"
    price2.textContent ="₹"+ elem.price2;

    boxprice.append(price1,price2);

    let eidtBox = document.createElement('div');
    eidtBox.id = "edit-box"
    eidtBox.style.display = "none";

    let h3 = document.createElement('h3');
    h3.textContent = elem.title;
    eidtBox.append(h3);
    box.append(itemImage ,eidtBox);
    
    let editAndWish = document.createElement('div');
    editAndWish.className = 'editAndRemove';
    
    let editBtn = document.createElement('button');
    editBtn.textContent = "Edit Item";
    editBtn.style.cursor="pointer"
    editBtn.onclick = ()=>{
      box1.style.display = "none";

      eidtBox.style.display = "inline-Block";      
    }


    let wishlist = document.createElement("button");
    wishlist.innerText = "Move to Wishlist";
    wishlist.style.cursor="pointer"
    wishlist.addEventListener("click", function () {
      wishlistadd(elem,i);
    });

    editAndWish.append(editBtn, wishlist);

    let REMOVE = document.createElement("button");
    REMOVE.innerHTML = `<i class="fas fa-trash"></i>`
    REMOVE.addEventListener("click", function () {
            removeItem(elem, i);
    });
    quantity.addEventListener("change", function () {
            quantityitems(elem, i, box);
    });
    REMOVE.style.cursor="pointer"
    boxbottom.append(editAndWish,REMOVE)
    box11.append(box1a,boxprice)
    box1.append(box11,boxbottom)
    box.append(itemImage,box1)
    product.append(box)
  })
  totalprice();
  document.getElementById("cartcount").innerText = temp.length;
}

//reduce function
function totalprice() {
  let subtotal = proctArray.reduce(function (elem, curr) {
    return elem + Number(curr.price1 * curr.quantity);
  }, 0);
  document.getElementById("subtotalll1").innerText = `${subtotal}`;
  document.getElementById("subtotalll2").innerText = `${subtotal}`;

  localStorage.setItem("local-subtotal", subtotal);
}

function quantityitems(elem, index, div) {
  let quantity = div.querySelector("#qty").value;
  elem.quantity = Number(quantity);
  console.log(elem);
  localStorage.setItem("mycart", JSON.stringify(proctArray));

  displayCart(proctArray);
}



//  REMOVE FUNCTION


function removeItem(elem, index) {
  event.preventDefault();
  proctArray.splice(index, 1);
  localStorage.setItem("mycart", JSON.stringify(proctArray));
  displayCart(proctArray);
  patchUser();
  async function patchUser(){
    try {
      let user =await fetch(`https://test-api-y3sx.onrender.com/users/${id}`,{
        method: "PATCH",
         headers: {
             "Content-Type":"application/json",
          },
          body:JSON.stringify({
            "cart": proctArray
          }) 
      })
    } catch (error) {
      console.log(error)
    }
  }

}

// WishList 
async function getWish(){
  try {
    let user =await fetch(`https://test-api-y3sx.onrender.com/users/${id}`);
    let userArr =await user.json();
    // console.log(proctArray, "inside get")
    return userArr.wishList;
  } catch (error) {
    console.log(error)
  }
}


async function wishlistadd(elem,index){
  let wishcart= await getWish();
  wishcart.push(elem)
  proctArray.splice(index, 1);
  localStorage.setItem("mywishlistcart",JSON.stringify(wishcart))
  patchUser();
  async function patchUser(){
    try {
      let user =await fetch(`https://test-api-y3sx.onrender.com/users/${id}`,{
        method: "PATCH",
         headers: {
             "Content-Type":"application/json",
          },
          body:JSON.stringify({
            "wishList": wishcart,
            "cart": proctArray
          }) 
      })
    } catch (error) {
      console.log(error)
    }
  }

  displayCart(proctArray);
}

//coupon
document.getElementById("CouponBtn").addEventListener("click",()=>{
  let x= document.getElementById("CouPonID").value
  if(x=="FAB1000"){
    document.getElementById("discount11").innerText="1000"
    let tprice=JSON.parse(localStorage.getItem("local-subtotal"))||0
    tprice-=1000
    localStorage.setItem("local-subtotal", tprice);
    document.getElementById("CouponApplied").innerText="Coupon Applied"
    document.getElementById("CouponApplied").style.color="green"
    document.getElementById("subtotalll2").innerText = tprice
  }
  else{
    document.getElementById("CouponApplied").innerText="Wrong Coupon Applied"
    document.getElementById("CouponApplied").style.color="red"
  }
})

//username 
var user1name=JSON.parse(localStorage.getItem("usernamefab"))||"User"
document.getElementById("custname").innerText=user1name