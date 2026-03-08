let cart = JSON.parse(localStorage.getItem("cart")) || []

function addToCart(name,price){

cart.push({name,price})

localStorage.setItem("cart",JSON.stringify(cart))

alert("Produkt im Warenkorb")

}

function loadCart(){

let list=document.getElementById("cartItems")

let total=0

cart.forEach(item=>{

let li=document.createElement("li")

li.innerText=item.name+" - "+item.price+"€"

list.appendChild(li)

total+=item.price

})

document.getElementById("total").innerText=total+"€"

}
