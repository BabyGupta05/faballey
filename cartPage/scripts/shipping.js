import { navbar, footer } from "./navbar.js"

let id = 2;


document.getElementById('navbar').innerHTML = navbar();
document.getElementById('footer').innerHTML = footer();

document.querySelector("#child2 :nth-child(2) a").style.color = "#fc6486"
document.querySelector("#child2 :nth-child(2) i").style.color = "#fc6486"


let cartItems = document.getElementById('shpItemsMain');
let subTotal = localStorage.getItem('local-subtotal');
let proctArray = JSON.parse(localStorage.getItem('mycart')) || [];

console.log(proctArray)
// async function getCart(){
//     try {
//       let user =await fetch(`https://test-api-y3sx.onrender.com/users/${id}`);
//       let userArr =await user.json();
//       // console.log(proctArray, "inside get")
//       // return userArr.cart;
//       displayCart(userArr.cart);
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   getCart();
displayCart(proctArray)

  function displayCart(data){
    cartItems.textContent = "";
    data.map((ele, i)=>{
     let prodWrapper = document.createElement("div");
     prodWrapper.className = "prod-wrapper";

      let img = document.createElement("img");
      img.src = ele.img1;

      let details = document.createElement('span');
      let title = ele.title;
      let br1 = document.createElement('br');
      let SKU = `Sku : TOP05836B`
      let br2 = document.createElement('br');
      let Qty = `Qty : ${ele.quantity}`;
      let priceSpan = document.createElement('span');
      priceSpan.className = "shipItemPrice"
      let price = ` Price : ₹ ${ele.price1}`
      priceSpan.innerHTML = price;
      details.append(title, br1, SKU, br2, Qty,priceSpan);
      prodWrapper.append(img, details);
      cartItems.append(prodWrapper)

      })
      document.getElementById('sub-total-prize').innerHTML = `₹  ${subTotal}`
      document.getElementById('order-total-prize').innerHTML = `₹  ${subTotal}`
  }

  
document.getElementById("adressform").addEventListener("submit",addressfill)
        function addressfill(){
            event.preventDefault()
            console.log("click")
            var obj={
                firstname1:document.getElementById("first_name").value,
                lastname1:document.getElementById("last_name").value,
                address1:document.getElementById("address").value,
                city1:document.getElementById("city").value,
                state1:document.getElementById("state").value,
                phone1:document.getElementById("phone_number").value
            }

            if(!document.querySelector('input').value){
                alert("fill the details....")
            }
            else{                
                localStorage.setItem("address-form",JSON.stringify(obj))
                showaddress(obj)
            }
        }
        function showaddress(obj){
        console.log("hi",address)
        document.getElementById("Addressbox").innerHTML=""
        var div1=document.createElement("div")
        div1.setAttribute("id","boxx")
        var input=document.createElement("input")
        input.setAttribute("type","radio")
        var name=document.createElement("p")
        name.innerText=obj.firstname1+" "+obj.lastname1;
        var address= document.createElement("p")
        address.textContent=obj.address1;
        var city=document.createElement("p")
        city.innerText=obj.city1;
        var state=document.createElement("p")
        state.innerText= obj.state1;
        var zip=document.createElement("p")
        zip.textContent= obj.zip1;
        var phone=document.createElement("p")
        phone.textContent= obj.phone1;
        var div2=document.createElement("div")
        div2.setAttribute("id","boxx1")
        var button=document.createElement("button")
        button.id="add-butt-on"
        button.innerText="DELIVER HERE"
        button.addEventListener("click",opennext)
        div2.append(name,address,city,state,phone,button)
        div1.append(div2)
        document.getElementById("Addressbox").append(div1)
    }
    function opennext(){
        console.log("yoooooo");
        window.open("./payment.html","_self")
    }
        //username 


// var naaaaame = "user"
// localStorage.setItem("usernamefab",JSON.stringify(naaaaame))
var user1name=localStorage.getItem("usernamefab") ||"User"
document.getElementById("custname").innerText=user1name