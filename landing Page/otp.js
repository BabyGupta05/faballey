function PassPage(){
    return ` <div id="login_popup" class="otp">
    <h3>WELCOME BACK</h3>
    <P ><span id="mail">masai@gmail.com </span><a href="Login.html"> change</a></P>
    <p id="close">&times;</p>
    <span style="display:none" id="mail_sent">Succefully Registerd,<br>Temporary Password sent to registred Email</span>
     <input type="password" placeholder="Password" id="OTP">
     <span style="display:none" >Password is incorrect!</span>
     <div id="otp_forgot">
        <div>
            <input type="checkbox" value="1" >
            <label for="">Remember Password</label>
        </div>
        <a href="#" id="forgot_pass">Forgot Password</a>
     </div>
     <button id="OTP_btn" >LOGIN</button>
     <div id="login_fg">
     
     </div>
</div>`
}

export default PassPage ;

function loginPage(){
    return `<div id="login_popup">
    <h3>LOGIN OR SIGNUP</h3>
    <P>for a quicker checkout</P>
    <p id="close">&times;</p>
     <input type="text" placeholder="Enter Mobile/Email" id="ph_number">
     <span style="display:none">Mobile/Email is required!</span>
     <button id="login_btn">CONTINUE</button>
     <h5 id="login_line"><span>Or continue with</span></h5>
     <div id="login_fg">
     <a href="#" id="l_fb"><img src="https://www.faballey.com/images/loginfb.png" alt="facebook"></a>
     <a href="#" id="l_google"><img src="https://www.faballey.com/images/logingogl.png" alt="google"></a>
     </div>
     <a href="#" id="login_skip">skip</a>
</div>`
}

function otpPage(){
    return `
    <div id="box">
      <div id="login_popup">
        <h3>GET OTP</h3>
        <P >A 4-digit OTP has been sent to <br><br><span id="mail"> 9108143704</span></P>
        <p id="close">&times;</p>
        <input type="text" placeholder="Enter OTP" id="OTP" />
        <span style="display: none">invalid required!</span>
        <button id="login_btn" class="otp_btn">LOGIN</button>
      
        <a href="#" id="login_skip">Resend OTP</a>
      </div>
    </div> `
}

export {loginPage,otpPage}