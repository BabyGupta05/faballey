import navbar from "../Navbar/navbar.js";
import footer from "../FOOTER/footer.js";


document.getElementById('navbar').innerHTML = navbar();
document.getElementById('footer').innerHTML = footer();

let itemcount= document.querySelector(".count");
let getcartitem= JSON.parse(localStorage.getItem("mycart"))  || [];

console.log(getcartitem.length)

if(getcartitem.length==0){
  itemcount.innerText= 0;
}else{
  itemcount.innerText = getcartitem.length;
}

let id=localStorage.getItem("product-id")||"";
console.log(id)
let user_id = localStorage.getItem("logged") || 1 ;
async function fetchData(){
    try {
        let res = await fetch(`https://test-api-y3sx.onrender.com/products/${id}`);
        let data = await res.json();;
        console.log(data);
        showData(data)
    } catch (error) {
        console.log(error);
    }
}
fetchData()

let imgcontainer = document.getElementById("image-container");
let rightContainer=document.getElementById("right-container");

function showData(data){
    let imagesdiv=document.createElement("div");
    let image1=document.createElement("img");
    let image2=document.createElement("img");
    let image3=document.createElement("img");
    let image4=document.createElement("img");
    image1.className="image"
    image2.className="image"
    image3.className="image"
    image4.className="image"
    image1.src=data.img1
    image2.src=data.img2
    image3.src=data.img3
    image4.src=data.img4

    
    let name=document.createElement("h2");
    name.textContent=data.title;

    let price = document.createElement("h2");
    price.textContent="₹ "+data.price1;

    let price2=document.createElement("h2");
    price2.textContent="₹ "+data.price2;
    price2.style.marginLeft="10px"
    price2.style.textDecoration="line-through"
    price2.style.color="grey"



    let pricediv=document.createElement("div");
    pricediv.append(price,price2)
    pricediv.className="pricediv"

    let tax=document.createElement("p");
    tax.textContent="Inclusive of all taxes";

    let sku=document.createElement("p");
    sku.textContent="SKU: TOP06623Z";

    let icondiv=document.createElement("div");
    icondiv.className="icondiv"
    icondiv.style.marginLeft="0px"

    let icon=document.createElement("img");
    icon.src = "./images/g.svg"
    icon.style.width="22px"

    let dtitle=document.createElement("p");
    dtitle.textContent = " EXPRESS   | 3 Day Delivery on orders placed before 2pm"
    dtitle.style.marginLeft= "10px"
    icondiv.append(icon,dtitle)

    let size=document.createElement("div");
    size.className="size"
    let left=document.createElement("div");
    let right =document.createElement("div");

    let s=document.createElement("h4");
    s.textContent="SIZE:";
    let btn1=document.createElement("button");
    btn1.className="size-button"
    let btn2=document.createElement("button");
    btn2.className="size-button"
    let btn3=document.createElement("button");
    btn3.className="size-button"
    let btn4=document.createElement("button");
    btn4.className="size-button"
    let btn5=document.createElement("button");
    btn5.className="size-button"
 
    btn1.textContent="XS";
    btn2.textContent="S";
    btn3.textContent="M";
    btn4.textContent="L";
    btn5.textContent="XL";

    let r=document.createElement("h4");
    r.textContent="SIZE GUIDE";
    r.style.marginRight= "20px"
    r.style.textDecoration="underline"

    right.append(r);
    left.append(s,btn1,btn2,btn3,btn4,btn5);
    size.append(left,right);

    let addtobtn=document.createElement("div");

    let addbtn=document.createElement("button");
    addbtn.className="add-button"
    let whishbtn=document.createElement("button");
    whishbtn.className="add-button"
    addbtn.textContent="ADD TO BAG";
    addbtn.addEventListener("click",()=>{
        console.log(data)
        functionvishal(data);
        addbtn.textContent="GO TO BAG";
        addbtn.style.background = "#03bb5c"
        addbtn.onclick= ()=>{
          location.href = "../cartPage/html/cart.html"
        }
    });



    whishbtn.textContent="ADD TO WHISHLIST";
    addtobtn.append(addbtn,whishbtn);
    whishbtn.addEventListener("click",addfunc);

    function addfunc(){
        wishList(data);
    }

    let pincode=document.createElement("div");
    let h3=document.createElement("h3");
    h3.textContent="Check Delivery Time";
    h3.style.marginTop="10px"
    h3.style.marginBottom="15px"

    let pindiv=document.createElement("div");
    let input=document.createElement("input");
    input.placeholder="Enter Pincode"
    input.type="number"
    input.className="pincode-input"
    let checkbtn=document.createElement("button");
    checkbtn.innerHTML=`<i class="fa-regular fa-heart"></i> `+"CHECK"

    checkbtn.className="pincode-input"
    pindiv.append(input,checkbtn);
    pindiv.className="pin-div"
    pincode.append(h3,pindiv);


    let codbtns=document.createElement("div");
    codbtns.className="codbtns"
    let bt1=document.createElement("button");
    bt1.className="cod-button"
    let bt2=document.createElement("button");
    bt2.className="cod-button"
    let bt3=document.createElement("button");
    bt3.className="cod-button"

    bt1.innerHTML=`<i class="fa-solid fa-code-branch"></i>`+" COD Available"
    bt2.innerHTML=`<i class="fa-solid fa-anchor"></i>`+"Secure Payment"
    bt3.innerHTML=`<i class="fa-sharp fa-solid fa-truck-fast"></i>`+" Free Shipping"
    codbtns.append(bt1,bt2,bt3)

    let avality=document.createElement("p");
    avality.textContent="CHECK IN-STORE AVAILABILITY"
    avality.className="avality-checkbox"

    rightContainer.append(name,pricediv,tax,sku,icondiv,size,addtobtn,pincode,codbtns,avality);


    imgcontainer.append(image1,image2,image3,image4);
    imgcontainer.append(imagesdiv);
}


// add___________________________________ to________________________ bag
async function functionvishal(elem) {
    event.preventDefault();
    let cart= await getUser();
    // console.log(cart)
//    console.log(cart)
    localStorage.setItem("mycart", JSON.stringify(cart));
    
       // check duplicate
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