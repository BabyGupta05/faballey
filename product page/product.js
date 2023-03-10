// let api=;

let user_id = localStorage.getItem("logged") || 1 ;
async function fetchData(url){
    try {
        let res = await fetch(url);
        let data = await res.json();;
        console.log(data);
        showData(data)
    } catch (error) {
        console.log(error);
    }
}
fetchData(`https://test-api-y3sx.onrender.com/products?_limit=27`)
let limit=27;

let load=document.getElementById("load-more");
load.addEventListener("click",fdata)
async function fdata(){
    try {
        console.log("hii")
        limit+=27;
        fetchData(`https://test-api-y3sx.onrender.com/products?_limit=${limit}`)
    } catch (error) {
        console.log(error);
    }
}
   



let container = document.getElementById("products-container");
let loadbtn=document.getElementById("load-button");
let current = 4;

function showData(data){
    container.innerHTML = "";
    data.forEach((product,index)=> {
        let div = document.createElement("div");
        div.className="card"



        let img = document.createElement("img");
        img.src = product.img1;
        img.alt = product.name;
        img.className="img"
        img.onclick=function(){
            localStorage.setItem("product-id", product.id);
            location.href="Details.html";
        }

       let detail=document.createElement("div");
       detail.className="products-detail"
       




        let name=document.createElement("p");
        name.textContent = product.title;
        name.style.margin= "10px"
        name.className="product-name"

        let pricediv=document.createElement("div");
        pricediv.className="pricediv"

        let p1=document.createElement("p");
        p1.textContent ="₹ "+ product.price1;

        let p2=document.createElement("p");
        p2.textContent ="₹ "+ product.price2;
        p2.style.marginLeft= "10px"
        p2.style.textDecoration= "line-through"
        p2.style.color="grey"
        pricediv.append(p1,p2);

        let ddiv=document.createElement("div");
        ddiv.className="ddiv"

        let icon=document.createElement("img");
        icon.src = "./images/g.svg"
        icon.style.width="22px"

        let dtitle=document.createElement("p");
        dtitle.textContent = "EXPRESS   | 3 Day Delivery"
        dtitle.style.marginLeft= "10px"
        dtitle.style.marginTop= "14px"

        let btndiv=document.createElement("div");
        btndiv.className="btndiv"

        let heartContainer=document.createElement("div");
        heartContainer.setAttribute("class","like-button");
        let heart=document.createElement("div");
        heart.setAttribute("class","heart-bg")
        let heartIcon=document.createElement("div");
        heartIcon.setAttribute("class","heart-icon")
        heartIcon.addEventListener("click",addfunc);

        function addfunc(){
            heartIcon.classList.toggle("liked");
            console.log(heartIcon)
            wishList(product,index);
        }
        
        heart.append(heartIcon);
        heartContainer.append(heart);

        let button=document.createElement("button");
        button.textContent = "ADD TO BAG";
        button.className="button"
        button.addEventListener("click",()=>{
            console.log(product)
            functionvishal(product,index);
        });
        

        ddiv.append(icon,dtitle);
        btndiv.append(heartContainer, button);
        detail.append(name,pricediv,ddiv,btndiv)
        div.append(img,detail);  
        container.append(div);
    });
}

// sorting

document.getElementById("sorted-div").addEventListener("change",funch);

async function funch(){
    let f=document.getElementById("sorted-div").value;
    if(f=="asc" || f=="desc"){
        fetchData(`https://test-api-y3sx.onrender.com/products?_limit=27&_sort=price1&_order=${f}`)
    }else if(f=="tops"){
        fetchData(`https://test-api-y3sx.onrender.com/products?category=${f}`)
    }
}


// add___________________________________ to________________________ bag
async function functionvishal(elem) {
  event.preventDefault();
  let cart= await getUser();
  localStorage.setItem("mycart", JSON.stringify(cart));
     let c=0;
     cart.map(function(ele){
        if(elem.id==ele.id){
            c++;
        }
     })
     console.log(cart)
     if(c==0){
      cart.push(elem)
       patchUser();
     } else {
     alert("Already present in Cart")
     }

  async function patchUser(){
    try {
      let user =await fetch(`https://test-api-y3sx.onrender.com/users/${user_id}`,{
        method: "PATCH",
         headers: {
             "Content-Type":"application/json",
          },
          body:JSON.stringify({
            "cart": cart
          }) 
      })
    } catch (error) {
      console.log(error)
}
}

}

// getUser()
async function getUser(){
  try {
    let user =await fetch(`https://test-api-y3sx.onrender.com/users/${user_id}`);
    let userArr =await user.json();
  //   localStorage.setItem("mycart", JSON.stringify(userArr.cart))
  //   console.log(userArr.cart, "inside get")
    return userArr.cart;
  } catch (error) {
    console.log(error)
  }
}

// Add_________________________ to____________________________ WishList




async function wishList(elem, index) {
  event.preventDefault();
  let wishList= await getWish();
  // console.log(cart)
  
  localStorage.setItem("mycart", JSON.stringify(wishList));

  // check duplicate
let c=0;
wishList.map(function(ele){
  if(elem.id==ele.id){
      c++;
  }
})

if(c==0){
wishList.push(elem)
 console.log(wishList)
 patchUser();
} else {
alert("Already present in wishlist")
}

  async function patchUser(){
    try {
      let user =await fetch(`https://test-api-y3sx.onrender.com/users/${user_id}`,{
        method: "PATCH",
         headers: {
             "Content-Type":"application/json",
          },
          body:JSON.stringify({
            "wishList": wishList
          }) 
      })
    } catch (error) {
      console.log(error)
}
}

}

// getUser()
async function getWish(){
  try {
    let user =await fetch(`https://test-api-y3sx.onrender.com/users/${user_id}`);
    let userArr =await user.json();
  //   localStorage.setItem("mycart", JSON.stringify(userArr.cart))
    console.log(userArr.wishList, "inside wish get")
    return userArr.wishList;
  } catch (error) {
    console.log(error)
  }
}




document.querySelector(".dropdown-menu").addEventListener("change",funcv);
function funcv(){
  let f=document.querySelector("#check-box").value;
  console.log(f)
  if(f=="517"){
      fetchData(`https://test-api-y3sx.onrender.com/products?_limit=27&_sort=price1&_order=asc`)
  }else if(f=="tops"){
      fetchData(`https://test-api-y3sx.onrender.com/products?category=desc`)
  }
}


function func(){
      fetchData(`https://test-api-y3sx.onrender.com/products?_limit=27&_sort=color&_color=black`)
}

document.getElementById("under999").addEventListener("click",func999);

function func999 (){
    fetchData(`https://test-api-y3sx.onrender.com/products?_limit=27&_sort=price1&_price1=999`)
}
function func699(){
  fetchData(`https://test-api-y3sx.onrender.com/products?_limit=27&_sort=price1&_price1=699`)
}
function func799(){
  fetchData(`https://test-api-y3sx.onrender.com/products?_limit=27&_sort=price1&_price1=799`)
}

document.getElementById("party_wear").addEventListener("click",funcpartywaer);

function funcpartywaer(){
  
  fetchData(`https://test-api-y3sx.onrender.com/products?_limit=27&_sort=category&_category=party`)
}

document.getElementById("tops").addEventListener("click",functops);

function functops(){
    fetchData(`https://test-api-y3sx.onrender.com/products?_limit=27&_sort=category&_category=tops`)
}

document.getElementById("dress").addEventListener("click",funcdress);

function funcdress(){
    fetchData(`https://test-api-y3sx.onrender.com/products?_limit=27&_sort=category&_category=dress`)
}

// document.getElementById("party_wear").addEventListener("click",funcpartywaer);

// function funcpartywaer(){
//     fetchData(`https://test-api-y3sx.onrender.com/products?_limit=27&_sort=category&_category=party`)
// }



 


 