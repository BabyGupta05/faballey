function navbar(){
    return `<div id="navbar-child">
    <div id="child1">
       <img src="https://www.faballey.com/images/logo.png" onclick="homego()" alt="">
    </div>
    <div id="child2">
       <div class="top-bag" id="bag-navbar">

       <a href="cart.html" class="stepActive crpnt"><i class="fa fa-shopping-cart">
       </i>Bag</a>
       </div>

       <div class="top-bag" id="ship-navbar">
       <a href="shipping.html" class="crpnt">
       <i class="fa fa-truck"></i>Shipping</a>

       </div>
       <div class="top-bag" id="payment-navbar">

       <a href="payment.html"><i class="fa fa-credit-card"></i>Payment</a>
       </div>
    </div>

    <div id="child3">
        <i class="fa fa-user"></i>
       <p class="username-navbar">Hi, <span id="custname"> User </span></p>
    </div>
 </div>`
}

function footer(){
    return `<div>Home | Contact us| Privacy | Terms</div>
    <div>© 2023 Faballey.com. All Rights Reserved</div>`
}

export {navbar, footer};