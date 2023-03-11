import { navbar } from "./navbar.js";

document.getElementById('navbar').innerHTML = navbar();


document.querySelector("#child2 :nth-child(3) a").style.color = "#fc6486"
document.querySelector("#child2 :nth-child(3) i").style.color = "#fc6486"

let subtotal = localStorage.getItem('local-subtotal') || 0;
let adress = JSON.parse(localStorage.getItem('address-form')) || ""
let cartArr = JSON.parse(localStorage.getItem('mycart')) || [];
let length = cartArr.length;

document.getElementById('prod-count').textContent = `${length} products(s) in Bag`

document.getElementById('sub-total1').innerHTML = `<i class="fa fa-inr"></i> ${subtotal}`

document.getElementById('sub-total2').innerHTML = `<i class="fa fa-inr"></i> ${subtotal}`

document.getElementById("deliverAddres").innerHTML = `<div class="dlveAdrsbox" id="1273043">
<p>${adress.firstname1} ${adress.lastname1} 
<br> ${adress.city1}<br></p>
<p>Mobile <b>${adress.phone1}</b>
</p>
</div>`

let creditBtn = document.getElementById('credit-card');
let upiBtn = document.getElementById('upi');
let netBtn = document.getElementById('net-banking');
let walletsBtn = document.getElementById('wallets');
let codBtn = document.getElementById('cod');

let payForm = document.getElementById('payment-form');

creditBtn.onclick = ()=>{
   payForm.innerHTML =`<h3>CREDIT/DEBIT CARD</h3>
   <div class="payment-credit-section">
     <input
       type="text"
       placeholder="XXXX  XXXX  XXXX  XXXX"
       class="card-number"
       required
     />
     <input
       type="text"
       placeholder="Cardholder Name"
       class="card-name"
       required
     />

     <div class="card-details">
       <div class="card-month-item">
         <input type="text" placeholder="MM" class="card-month"
         required
         
         />
       </div>
       <div class="card-year-item">
         <input type="text" placeholder="YY" class="card-year"
         required
         
         
         />
       </div>
       <div class="card-cvv-item">
         <input type="text" placeholder="CVV" class="card-cvv"
         
         required
         
         />
       </div>
     </div>
   </div>
   
   <button type="submit" class="btn-payment">
     Pay Now
   </button>`
}

upiBtn.onclick = ()=>{
    // console.log(" inside upi")
    payForm.innerHTML = `
    <article style="display: block;">
    <h3>UPI</h3>
    <div class="choosePmt">
        <div class="chooseInpBox">
            <input type="text" id="text_upi" placeholder="VPA/UPI ID (eg. xxxxxxxxxx@upi)" class="card-number"> 
            <span id="upi_valid" class="expiryInvalid">
            </span>
        </div>
        <button type="submit" class="btn-payment" data-val="upi">Pay Now</button> 
        <button type="submit" class="btn-payment" data-val="qr">Pay Using QR Code</button>
        </div></article>`
}

walletsBtn.onclick = ()=>{
    payForm.innerHTML = `<article style="display: block;"><h3>Mobile Wallets</h3><div class="choosePmt"><div class="chooseInpBox"><div class="walletBox" data-val="PAYTM"><span class=""><img style="width:50px" src="https://download.logo.wine/logo/Paytm/Paytm-Logo.wine.png" alt="Paytm"></span></div><div class="walletBox" data-val="AMAZONPAY"><span style="padding:10px"><img src="https://www.nicepng.com/png/detail/770-7701676_amazon-pay.png" alt="amazonpay" style="width:40px"></span></div></div><div class="chooseInpBox"><select id="selWalets"><option value="NA">Other Wallets</option><option value="PAYZAPP">PayZapp</option><option value="AIRTELMONEY">Airtel Money</option><option value="PHONEPE">PhonePe / BHIM UPI</option></select></div><p>We will redirect you to your wallet’s website to authorize the payment.</p><button type="submit" class="btn-payment razorWalt">Connect Wallet</button></div></article>`;
}

codBtn.onclick = ()=>{
    payForm.innerHTML = `<article style="display: block;"><h3>Cash on Delivery</h3><div class="choosePmt"><button type="submit" class="btn-payment">Pay <i class="fa fa-inr"></i><span id="codtxt">${subtotal}</span> By Cash</button></div></article>`
}


document.querySelector(".btn-payment").onclick = ()=>{

    if(!document.querySelector('input').value){
        alert("fill the details....")
    }
    else{
        console.log(" iside otp")
        location.href = "pay-otp.html"
    }

}


var user1name=localStorage.getItem("usernamefab") ||"User"
document.getElementById("custname").innerText=user1name