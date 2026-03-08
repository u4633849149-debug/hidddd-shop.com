// Produktliste
const productsData=[
    {name:"Basic Shirt",price:25,img:"https://via.placeholder.com/300",category:"Shirt",sizes:["S","M","L","XL"]},
    {name:"Street Hoodie",price:50,img:"https://via.placeholder.com/300",category:"Hoodie",sizes:["S","M","L","XL"]},
    {name:"Pullover Classic",price:40,img:"https://via.placeholder.com/300",category:"Pullover",sizes:["S","M","L","XL"]}
]

const productsContainer=document.getElementById("products")
let cart=[]
let wishlist=[]

function renderProducts(list){
    productsContainer.innerHTML=""
    list.forEach((p,i)=>{
        const card=document.createElement("div")
        card.className="card"
        card.innerHTML=`
            <img src="${p.img}" onclick="viewProduct(${i})">
            <h3>${p.name}</h3>
            <p>${p.price}€</p>
            <select id="size${i}">
                ${p.sizes.map(s=>`<option>${s}</option>`).join("")}
            </select><br>
            <button onclick="addCart(${i})">In Warenkorb</button>
            <button onclick="addWishlist(${i})">❤️</button>
        `
        productsContainer.appendChild(card)
    })
}

function addCart(i){
    const size=document.getElementById(`size${i}`).value
    cart.push({...productsData[i],size})
    document.getElementById("cartCount").innerText=cart.length
    alert(`${productsData[i].name} (${size}) im Warenkorb!`)
}

function addWishlist(i){
    wishlist.push(productsData[i])
    document.getElementById("wishlistCount").innerText=wishlist.length
    alert(`${productsData[i].name} zur Wishlist hinzugefügt!`)
}

function filterCategory(cat){
    renderProducts(productsData.filter(p=>p.category===cat))
}

function viewProduct(i){
    alert(`Produkt: ${productsData[i].name}\nPreis: ${productsData[i].price}€`)
}

// Dropdown Sidebar
const btn=document.querySelector(".dropdown-btn")
const dropdown=document.querySelector(".dropdown-container")
btn.onclick=()=>{dropdown.style.display=(dropdown.style.display==="block")?"none":"block"}

// Initial render
renderProducts(productsData)

// Checkout PayPal
document.getElementById("checkoutBtn").onclick=()=>{
    let total=cart.reduce((a,b)=>a+b.price,0)
    if(total===0){alert("Warenkorb ist leer!"); return}
    // Redirect PayPal Demo (hier Link anpassen)
    window.location.href="https://paypal.me/DEINLINK"
}
