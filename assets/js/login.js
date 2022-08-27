// Login validation...
const userEmail = "azharanowar@gmail.com";
const userPassword = "123456";

document.getElementById("loginBtn").addEventListener('click', function() {
    const userGivenEmail = document.getElementById("userEmail").value;
    const userGivenPassword = document.getElementById("userPassword").value;
    
    // Check if email and password are valid or not
    if ( userGivenEmail === "" || userGivenPassword === "" ) {
        alert("Email or password field can't be empty!!!");
    } else if ( userEmail === userGivenEmail && userPassword === userGivenPassword ) {
        window.open("bank-dashboard.html", "_self");
    } else {
        alert("Invalid email or password! Please provide valid login info!!!");
    }
});