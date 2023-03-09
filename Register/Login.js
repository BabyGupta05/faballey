import PassPage from "./otp.js";
import {otpPage,loginPage} from "./otp.js";
import navbar from "../Navbar/navbar.js"

document.querySelector("nav").innerHTML=navbar();

// Checking login ?
let log_status = localStorage.getItem("logged") || "";
console.log(log_status)
if(log_status){
    document.getElementById("login_box").innerHTML = `
    <select name="" id="profile_dropdown" >
                 <option value="account"><a href="#">My account</a> </option>
                 <option value="order"><a href="#">My order</a></option>
                 <option value="logout">Log out</option>
               </select>`
               document.getElementById("profile_dropdown").addEventListener("change",logout)
}else{
    document.getElementById("login_box").innerHTML = `
    <a href="#" id="login" class="link">|  Login </a>
    <a href="#" id="Signup" class="link">|  Sign up </a>`
}

// logout
function logout(){
    if(document.getElementById("profile_dropdown")){
        console.log("ho....")
       let value= document.getElementById("profile_dropdown").value
        if(value == "logout"){
            localStorage.setItem("logged","");
            // window.location.href="index.html"
        }
    }
}



let user = [];
let url = `https://test-api-y3sx.onrender.com/users`

getdata(url)
 async function getdata(url){
   try {
    let res = await fetch(url);
    user = await res.json();
    console.log(user)
    document.getElementById("login_btn").addEventListener("click",function(){
        verify(user)
    })
  } catch (error) {
    console.log(error)
}
    }
    console.log(user)
// Registraion/Login


function verify(user){
    document.getElementById("box").style.display="block"


    // OTP & PASSWORD Generate
    let Otp ="",password="";
    let str ="ABCDEFGHIJKLMNOPQRSTUYWXYZ0123456789abcdefghijklmnopqrstuvwxyz"
    for(let i=0; i<4; i++) Otp += Math.floor(Math.random()*10);
    for(let i=0; i<6; i++) password+=str.charAt(Math.floor(Math.random()*str.length));
     console.log(Otp,password)


    let input = document.getElementById("ph_number").value;
    let size = input.length;
    let wrong_cred = document.querySelector("#ph_number+span")

   let obj = {
    firstName : "",
    lastName:"",
    Gender:"",
    DOB:"",
    ph : "",
    mail : "",
    Password : "",
    login_status:false,
    address: [],
    cart:[],
    wishList:[]
   }


  let c=0;
   if(input.includes("@gmail.com") || Number.parseInt(input)){
console.log(user)
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

//////////////////erorr

//    New User's
   if(c==0){
    if(input.includes("@gmail.com")){
        console.log(Otp)
        document.getElementById("box").innerHTML=PassPage()
        document.getElementById("box").style.display = "block"
        document.getElementById("mail").innerText = input
        document.getElementById("OTP").innerText = input
       document.querySelector("#mail_sent").style.display="block"
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

        // post new user
        user.push(obj); postdata(obj)
        localStorage.setItem("user-list",JSON.stringify(user));
        localStorage.setItem("login",input)
       
       async function postdata(obj){
       try {
         let res = await fetch(`https://test-api-y3sx.onrender.com/users`,{
            method:"POST",
            headers:{
            "Content-Type": "application/json"
            },
            body:JSON.stringify(obj),
        })
    } catch (error) {
        console.log(error)
    }
       }

        // window.location.href="index.html"
        alert("Email sent Succefully..")
    
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


              }
            //   post data {number}
            postdata(obj)
            async function postdata(obj){
                try {

                    let res = await fetch(`https://test-api-y3sx.onrender.com/users`,{
                        method:"POST",
                        headers:{
                        "Content-Type": "application/json"
                        },
                        body:JSON.stringify(obj),
                    })
                } catch (error) {
                    console.log(error)
                }
            }

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



// password verify or OTP verify
let login_btn = document.getElementById("login_btn") || document.getElementById("OTP_btn")
login_btn.addEventListener("click",passValidation)
console.log(Otp)


function passValidation(){
    // password
    let wrong_pass = document.querySelector("#OTP+span")
    let enterd_pass = document.getElementById("OTP").value;
    let flag=false;
    console.log("pass valid...",enterd_pass)
    user.map(function(ele){
   
        if((ele.mail==input&&ele.Password==enterd_pass) || (ele.ph==input&&ele.Password==enterd_pass)){
            console.log("succfull login...",ele.Password,enterd_pass)
            flag=true;
            localStorage.setItem("logged",`${ele.id}`)
            postdata(ele)
            async function postdata(ele){
                try {

                    let res = await fetch(`https://test-api-y3sx.onrender.com/users/2`,{
                        method:"PATCH",
                        headers:{
                        "Content-Type": "application/json"
                        },
                        body:JSON.stringify({
                            "login_status":true
                        })
                    })
                } catch (error) {
                    console.log(error)
                }
            }


            // window.location.href="index.html"
            return;
        }
    })

    if(!flag){
        wrong_pass.style.display="block"
        console.log("invalid Password")
    }

    //otp verify
    if(Otp==enterd_pass){
        wrong_pass.style.display="none"
        console.log("succfull..by number", Otp,enterd_pass)
        alert(`Your Temporary password :- ${password}`)
        localStorage.setItem("logged",true)
        // window.location.href="index.html"
    }


}



document.getElementById("close").addEventListener("click",closePopup)

function closePopup(){
    document.getElementById("box").style.display = "none"
}

// show

document.getElementById("login").addEventListener("click",showPopup)
document.getElementById("Signup").addEventListener("click",showPopup)

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
document.getElementById("Signup").addEventListener("click",showPopup)

function showPopup(){
    document.querySelector("#ph_number+span").style.display="none"
    document.getElementById("box").style.display = "block"
}


