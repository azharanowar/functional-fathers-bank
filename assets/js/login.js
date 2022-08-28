// Login validation...
document.getElementById("loginBtn").addEventListener('click', function() {
    const userGivenEmail = document.getElementById("userEmail").value;
    const userGivenPassword = document.getElementById("userPassword").value;

    // userLogin function calling:
    userLogin( userGivenEmail, userGivenPassword );
});