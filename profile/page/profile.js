import {menu} from "../component/profileMenu.js";
// console.log(menu());
document.querySelector(".profile-left-section").innerHTML=menu();

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
