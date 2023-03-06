import PassPage from "./otp.js";
import {otpPage,loginPage} from "./otp.js";
document.getElementById("login_btn").addEventListener("click",verify)


// Registraion/Login

function verify(){
    let user = JSON.parse(localStorage.getItem("user-list")) || []
    let Otp ="",password="";
    let str ="ABCDEFGHIJKLMNOPQRSTUYWXYZ0123456789abcdefghijklmnopqrstuvwxyz"
    for(let i=0; i<4; i++)
      Otp += Math.floor(Math.random()*10)+1;
    for(let i=0; i<6; i++)
    password+=str.charAt(Math.floor(Math.random()*str.length));
     console.log(password)


    let input = document.getElementById("ph_number").value;
    let size = input.length;
    let wrong_cred = document.querySelector("#ph_number+span")
   let obj = {
    name : "",
    ph : "",
    mail : "",
    Password : "",
    address: {}
   }
  let c=0;
   if(input.includes("@gmail.com") || Number.parseInt(input)){

    // check existing customer
    user.filter(function(ele){
        if(ele.mail==input || ele.ph==input){

        document.getElementById("box").innerHTML=PassPage()
        document.getElementById("box").style.display = "block"
        document.getElementById("mail").innerText = input
         c++; return;

        }
    })

   }



//    New User's
   if(c==0){
    if(input.includes("@gmail.com")){
        
        //  email for new user
        Email.send({
            SecureToken : "dc989647-f40e-45dc-b708-b7b85e1361bf",
            Host : "smtp.elasticemail.com",
            Username : "vkvinu.com@gmail.com",
            Password : "ACC273AEBA34E7CF3972E72EE92CDF34107D",
            To : `${input}`,
            From : "vkvinu.com@gmail.com",
            Subject : "Hola! Welcome to FabAlley!",

            Body : `<!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Document</title>
            </head>
            <body>
            <img src="https://cdn.grabon.in/gograbon/images/merchant/1545146976896/faballey-logo.jpeg" alt="" >
            <br>
              <p>Hello,</p>
              <p><span> We're thrilled you liked our collection!</span></p>
              <p><span>To make your future shopping experience super quick and easy, we created a FabAlley account for you.</span></p>
              <p>EMAIL ID: **${input}**</p>
              <p>PASSWORD: **${password}**</p>
              <p>This password is auto generated and can be changed by going onto your profile.</p>
              <p>Now while we prep your order, kick back and check out our newest style staples!</p>
            </body>
            </html>`
        }).then(
          message => {
          if(message=="OK"){
            obj.mail = input;
        obj.Password=password;
        user.push(obj)
        localStorage.setItem("user-list",JSON.stringify(user));
        localStorage.setItem("login",input)
        console.log(Otp)
        document.getElementById("box").innerHTML=PassPage()
        document.getElementById("box").style.display = "block"
        document.getElementById("mail").innerText = input
       document.querySelector("#mail_sent").style.display="block"
          }else{
            alert(message)
          }




          }
        );


    }else if(Number.parseInt(input)){
        if(size!=10){
            wrong_cred.style.display = "block"
        }else{
              obj.ph = input; obj.Password =password
              user.push(obj)
              localStorage.setItem("user-list",JSON.stringify(user)); localStorage.setItem("login",input)
              wrong_cred.style.display = "none"
              document.getElementById("box").innerHTML=otpPage()
              document.getElementById("box").style.display = "block"
              document.getElementById("mail").textContent =`+91 ${input}`
              alert(`Your OTP is: - ${Otp}`)
              wrong_cred.style.display = "none"
        }
    }else{
        wrong_cred.style.display = "block"
    }
}

// password verify or OTP verify
let login_btn = document.getElementById("login_btn") || document.getElementById("OTP_btn")
login_btn.addEventListener("click",passValidation)

function passValidation(){

    // password
    let wrong_pass = document.querySelector("#OTP+span")
    let enterd_pass = document.getElementById("OTP").value;
    let flag=false;
    user.map(function(ele){
        if((ele.mail==input&&ele.Password==enterd_pass) || (ele.ph==input&&ele.Password==enterd_pass)){
            console.log("succfull login...",ele.Password,enterd_pass)
            flag=true;
        }
    })

    if(!flag){
        wrong_pass.style.display="block"
        console.log("invalid otp..!")
    }

    //otp verify
    if(Otp==enterd_pass){
        wrong_pass.style.display="none"
        console.log("succfull..by number", Otp,enterd_pass)
        alert(`Your Temporary password :- ${password}`)
    }


}
document.getElementById("close").addEventListener("click",closePopup)

function closePopup(){
    document.getElementById("box").style.display = "none"
}

// show

document.getElementById("login").addEventListener("click",showPopup)

function showPopup(){
    document.getElementById("box").style.display = "block"
}

}


// close 
document.getElementById("login_skip").addEventListener("click",closePopup)
document.getElementById("close").addEventListener("click",closePopup)

function closePopup(){
    document.getElementById("box").style.display = "none"
    document.querySelector("#ph_number+span").style.display="none"
}

// show

document.getElementById("login").addEventListener("click",showPopup)

function showPopup(){
    document.querySelector("#ph_number+span").style.display="none"
    document.getElementById("box").style.display = "block"
}

