 function menu() {
    return `
        <div class="profile-user-section">
          <span id="user-sign"> g </span>
          <h4>Hello,</h4>
          <p id="user-mail">guptababy510@gmail.com</p>
        </div>
        <hr />
        <div class="profile-menu-section">
          <ul>
            <li>
              <a id="profile-link" href="./profile.html"><i class="fa fa-circle-user"></i> My Profile</a>
            </li>
            <li>
              <a id="order-link" href="./Myorder.html"><i class="fa fa-bag-shopping"></i> My Orders</a>
            </li>
            <li>
              <a id="wishlist-link" href="./MyWishlist.html"><i class="fa fa-heart"></i> My Wishlist</a>
            </li>
            <li>
              <a id="credit-link" href="./Mycredit.html"><i class="fa fa-wallet"></i> My Credits</a>
            </li>
            <li>
              <a id="voucher-link" href="./Myvoucher.html"><i class="fa fa-gift"></i> My Vouchers</a>
            </li>
            <li>
              <a id="address-link" href="./Myaddress.html"><i class="fa fa-address-book"></i> My Addresses</a>
            </li>
            <li>
              <a id="contact-link" href="./ContactUs.html"><i class="fa fa-headset"></i> Contact Us</a>
            </li>
            <li>
              <a id="profile-log" href=""
                ><i class="fa fa-arrow-right-from-bracket"></i> Logout</a
              >
            </li>
          </ul>
        </div>
      `
}

export {menu}