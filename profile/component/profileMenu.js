 function menu() {
    return `
        <div class="profile-user-section">
          <span> g </span>
          <h4>Hello,</h4>
          <p>guptababy510@gmail.com</p>
        </div>
        <hr />
        <div class="profile-menu-section">
          <ul>
            <li>
              <a href="./profile.html"><i class="fa fa-circle-user"></i> My Profile</a>
            </li>
            <li>
              <a href="./Myorder.html"><i class="fa fa-bag-shopping"></i> My Orders</a>
            </li>
            <li>
              <a href=""><i class="fa fa-heart"></i> My Wishlist</a>
            </li>
            <li>
              <a href="./Mycredit.html"><i class="fa fa-wallet"></i> My Credits</a>
            </li>
            <li>
              <a href="./Myvoucher.html"><i class="fa fa-gift"></i> My Vouchers</a>
            </li>
            <li>
              <a href="./Myaddress.html"><i class="fa fa-address-book"></i> My Addresses</a>
            </li>
            <li>
              <a href=""><i class="fa fa-headset"></i> Contact Us</a>
            </li>
            <li>
              <a href=""
                ><i class="fa fa-arrow-right-from-bracket"></i> Logout</a
              >
            </li>
          </ul>
        </div>
      `
}

export {menu}