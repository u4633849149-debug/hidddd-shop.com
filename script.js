// Login System (Dummy)
let loggedIn = false;

function login(){
    const user = document.getElementById("username").value
    const pass = document.getElementById("password").value

    if(user==="admin" && pass==="1234"){ // Beispiel-Login
        loggedIn = true
        document.getElementById("loginOverlay").style.display="none"
        document.getElementById("navbar").style.display="flex"
        document.getElementById("sidebar").style.display="block"
        document.getElementById("content").style.display="block"
        document.getElementById("checkoutContainer").style.display="block"
        renderProducts(productsData)
    } else {
        alert("Falscher Benutzername oder Passwort!")
    }
}

function logout(){
    loggedIn = false
    document.getElementById("loginOverlay").style.display="flex"
    document.getElementById("navbar").style.display="none"
    document.getElementById("sidebar").style.display="none"
    document.getElementById("content").style.display="none"
    document.getElementById("checkoutContainer").style.display="none"
    cart=[]
    wishlist=[]
    document.getElementById("cartCount").innerText=0
    document.getElementById("wishlistCount").innerText=0
}

// Beim Laden alles verstecken
document.addEventListener("DOMContentLoaded",()=>{
    document.getElementById("navbar").style.display="none"
    document.getElementById("sidebar").style.display="none"
    document.getElementById("content").style.display="none"
    document.getElementById("checkoutContainer").style.display="none"
})
