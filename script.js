// Accounts System (Dummy)
let accounts = {}; // {username: password}
let loggedIn = false;

// Toggle zwischen Login und Register
function toggleForm(){
    const loginForm = document.getElementById("loginForm")
    const registerForm = document.getElementById("registerForm")
    const title = document.getElementById("loginTitle")
    if(loginForm.style.display==="none"){
        loginForm.style.display="block"
        registerForm.style.display="none"
        title.innerText="Login"
    }else{
        loginForm.style.display="none"
        registerForm.style.display="block"
        title.innerText="Registrieren"
    }
}

// Registrieren
function register(){
    const user = document.getElementById("registerUsername").value
    const pass = document.getElementById("registerPassword").value
    if(user in accounts){
        alert("Dieser Benutzername existiert bereits!")
    }else{
        accounts[user] = pass
        alert("Account erstellt! Bitte logge dich ein.")
        toggleForm()
    }
}

// Login
function login(){
    const user = document.getElementById("loginUsername").value
    const pass = document.getElementById("loginPassword").value
    if(user in accounts && accounts[user] === pass){
        loggedIn = true
        openShop()
    }else{
        alert("Falscher Benutzername oder Passwort!")
    }
}

// Google Login Simulation
function googleLogin(){
    const user = "googleUser"
    accounts[user] = "googleLogin" // Dummy Passwort
    loggedIn = true
    openShop()
}

// Shop öffnen
function openShop(){
    document.getElementById("loginOverlay").style.display="none"
    document.getElementById("navbar").style.display="flex"
    document.getElementById("sidebar").style.display="block"
    document.getElementById("content").style.display="block"
    document.getElementById("checkoutContainer").style.display="block"
    renderProducts(productsData)
}

// Logout
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
