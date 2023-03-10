import {menu} from "../component/profileMenu.js";
// console.log(menu());
document.querySelector(".profile-left-section").innerHTML=menu();

// activate menu link
let allLink=document.querySelector("a");
allLink.style.color="#323232;"
let link=document.getElementById("profile-link");
link.style.color="#FF8BA5"

// login id
let user_id = localStorage.getItem("logged") || 1;
// contact information
let editBtn = document.getElementById("address-edit");
let cancleBtn = document.getElementById("address-update");
let updateBtn = document.getElementById("address-cancle");
let email = document.getElementById("user-email");
let country = document.getElementById("country");
let phone = document.getElementById("user-phoneNo");
let userSign=document.getElementById("user-sign");
let userMail=document.getElementById("user-mail");
let fname=document.getElementById("fname");
let lname=document.getElementById("lname");
let gen=document.getElementById("gen");
let udob=document.getElementById("udob");

let url=`https://test-api-y3sx.onrender.com/users/${user_id}`;
get(url);
let uobj={};
async function get(url) {
  try {
    let res=await fetch(url);
    let jsdata=await res.json();
    console.log(jsdata);
    uobj=jsdata;
    display(jsdata);
  } catch (error) {
    console.log(error);
  }
}

// Patch call
// postdata()
async function patchData(data) {
  // let {data} = data
  console.log(data)
  try {
    let res = await fetch(
      `https://test-api-y3sx.onrender.com/users/${user_id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          data
        ),
      }
    );
  } catch (error) {
    console.log(error);
  }
}
// async function patchData(data) {
//  console.log(data,url)
//   try {
//     let user =await fetch(`https://test-api-y3sx.onrender.com/users`,{
//       method: "PATCH",
//        headers: {
//            "Content-Type":"application/json",
//         },
//         body:"hi"
//     })
//     console.log(user)
//   } catch (error) {
//     console.log(error)
//   }
  
// }
function display(data) {
      let word=data.mail;
      userSign.innerText=word.charAt(0).toUpperCase();
      userMail.innerText=word;
      email.value=data.mail;
      phone.value=data.ph;
      fname.innerText=data.firstName;
      lname.innerText=data.lastName;
      gen.innerText=data.Gender;
      udob.innerText=data.DOB;
}

updateBtn.onclick = function() {
  console.log("update");
  // console.table(uobj)
  // patch here
  editBtn.style.display = "block";
  updateBtn.style.display = "none";
  cancleBtn.style.display = "none";
  
 
}

cancleBtn.onclick = function() {
  editBtn.style.display = "block";
  updateBtn.style.display = "none";
  cancleBtn.style.display = "none";
  email.style.pointerEvents = "none";
  country.style.pointerEvents = "none";
  phone.style.pointerEvents = "none";
}

editBtn.onclick = function() {
  email.style.pointerEvents = "all";
  country.style.pointerEvents = "all";
  phone.style.pointerEvents = "all";
  editBtn.style.display = "none";
  updateBtn.style.display = "block";
  cancleBtn.style.display = "block";
 
}


let PI=document.querySelectorAll(".primaryInfo");
let PIupdateBtn=document.getElementById("info-update");
let PIcancleBtn=document.getElementById("info-cancel");
let PIeditBtn=document.getElementById("info-edit");
let form=document.querySelectorAll(".profile-right-info-section .InfoForm");




PIeditBtn.onclick = function() {
  for (let i = 0; i < PI.length; i++) {
    PI[i].style.display = "none";
    // console.log(PI[i]);
  }
  PIeditBtn.style.display="none";
  for (let i = 0; i < form.length; i++) {
    form[i].style.display = "flex";
  }
  console.log("edit....",uobj.Password)

//  Display ____________ USER Current Details__________
document.getElementById("ufname").value=uobj.firstName || "First Name";
document.getElementById("ulname").value=uobj.lastName || "Last Name";
document.getElementById("upwd").value=uobj.Password;

// gender
let G = document.getElementsByName("gender")

if(uobj.Gender=="male"){
  G[0].checked=true;
}else if(uobj.Gender=="female"){
  G[1].checked=true;
}

// DOB
if(uobj.DOB){
let dob=(uobj.DOB).split("-");
document.getElementById("dob-day").value=dob[0];
document.getElementById("dob-month").value=dob[1];
document.getElementById("dob-year").value=dob[2];
}

}



PIupdateBtn.onclick = function() {
  console.log("update");
  //  console.table(uobj)
  updateBtn.style.display = "none";
  cancleBtn.style.display = "none";
  editBtn.style.display = "block";
  
   // updateing___________ user details
   uobj.firstName= document.getElementById("ufname").value
   uobj.lastName = document.getElementById("ulname").value
   uobj.Password = document.getElementById("upwd").value
 
 // gender
 let G = document.getElementsByName("gender")
 
 if(G[0].checked){
   uobj.Gender="male"
 }else if( G[1].checked=true){
   uobj.Gender="female"
 }
 
 // DOB
  let date= document.getElementById("dob-day").value
  let month= document.getElementById("dob-month").value
  let year =document.getElementById("dob-year").value
  uobj.DOB=`${date}-${month}-${year}`

//  console.table(uobj)
 console.log("call..")
 patchData(uobj)
 for (let i = 0; i < PI.length; i++) {
  PI[i].style.display = "flex";
  console.log(PI[i]);
}
PIeditBtn.style.display="block";
for (let i = 0; i < form.length; i++) {
  form[i].style.display = "none";
}

}



PIcancleBtn.onclick = function() {
  for (let i = 0; i < PI.length; i++) {
    PI[i].style.display = "flex";
    console.log(PI[i]);
  }
  PIeditBtn.style.display="block";
  for (let i = 0; i < form.length; i++) {
    form[i].style.display = "none";
  }
}





// primary Information DOB 
const days = Array.from({length: 31}, (_, i) => i + 1);
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const years = Array.from({length: 100}, (_, i) => new Date().getFullYear() - i);

const dobDay = document.getElementById("dob-day");
const dobMonth = document.getElementById("dob-month");
const dobYear = document.getElementById("dob-year");

months.forEach((month, index) => {
  const option = document.createElement("option");
  option.value = index + 1;
  option.text = month;
  dobMonth.appendChild(option);
});

function updateDays() {
  const selectedMonth = dobMonth.value;
  let numDays = 31;
  
  if (selectedMonth === "2") {
    const selectedYear = dobYear.value;
    if (selectedYear % 4 === 0 && (selectedYear % 100 !== 0 || selectedYear % 400 === 0)) {
      numDays = 29;
    } else {
      numDays = 28;
    }
  } else if (selectedMonth === "4" || selectedMonth === "6" || selectedMonth === "9" || selectedMonth === "11") {
    numDays = 30;
  }
  
  dobDay.innerHTML = "";
  for (let i = 1; i <= numDays; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.text = i;
    dobDay.appendChild(option);
  }
}

dobMonth.addEventListener("change", updateDays);
dobYear.addEventListener("change", updateDays);

years.forEach(year => {
  const option = document.createElement("option");
  option.value = year;
  option.text = year;
  dobYear.appendChild(option);
});

updateDays();
