// let api=;

async function fetchData(url){
    try {
        let res = await fetch(url);
        let data = await res.json();;
        console.log(data);
        showData(data)
    } catch (error) {
        console.log(error);
    }
}
fetchData(`https://test-api-y3sx.onrender.com/products?_limit=27`)
let limit=27;

let load=document.getElementById("load-more");
load.addEventListener("click",fdata)
async function fdata(){
    try {
        console.log("hii")
        limit+=27;
        fetchData(`https://test-api-y3sx.onrender.com/products?_limit=${limit}`)
    } catch (error) {
        console.log(error);
    }
}
   



let container = document.getElementById("products-container");
let loadbtn=document.getElementById("load-button");
let current = 4;

function showData(data){
    container.innerHTML = "";
    data.forEach(product => {
        let div = document.createElement("div");
        div.className="card"

        let img = document.createElement("img");
        img.src = product.img1;
        img.alt = product.name;
        img.className="img"
        img.onclick=function(){
            localStorage.setItem("product-id", product.id);
            location.href="Details.html";
        }


        let name=document.createElement("p");
        name.textContent = product.title;
        name.style.margin= "10px"

        let pricediv=document.createElement("div");
        pricediv.className="pricediv"

        let p1=document.createElement("p");
        p1.textContent ="₹ "+ product.price1;

        let p2=document.createElement("p");
        p2.textContent ="₹ "+ product.price2;
        p2.style.marginLeft= "10px"
        p2.style.textDecoration= "line-through"
        pricediv.append(p1,p2);

        let ddiv=document.createElement("div");
        ddiv.className="ddiv"

        let icon=document.createElement("img");
        icon.src = "g.svg"
        icon.style.width="22px"

        let dtitle=document.createElement("p");
        dtitle.textContent = "EXPRESS   | 3 Day Delivery"
        dtitle.style.marginLeft= "10px"
        dtitle.style.marginTop= "14px"

        let btndiv=document.createElement("div");
        btndiv.className="btndiv"

        let heartContainer=document.createElement("div");
        heartContainer.setAttribute("class","like-button");
        let heart=document.createElement("div");
        heart.setAttribute("class","heart-bg")
        let heartIcon=document.createElement("div");
        heartIcon.setAttribute("class","heart-icon")
        heartIcon.addEventListener("click",addfunc);

        function addfunc(){
            heartIcon.classList.toggle("liked");
            console.log(heartIcon)
        }
        
        heart.append(heartIcon);
        heartContainer.append(heart);

        let button=document.createElement("button");
        button.textContent = "ADD TO BAG";
        button.className="button"
        button.addEventListener("click",()=>{
            console.log(product)
        });
        

        ddiv.append(icon,dtitle);
        btndiv.append(heartContainer, button);
        div.append(img,name,pricediv,ddiv,btndiv);  
        container.append(div);
    });
}
async function addtobag(){
  try {
    console.log("vinu")
    // let res= await fetchData()
  } catch (error) {
    
  }
}






