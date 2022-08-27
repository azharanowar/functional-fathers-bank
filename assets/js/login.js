// Login validation...
document.getElementById("loginBtn").addEventListener('click', function() {
    const userGivenEmail = getInputFieldValueById( "userEmail" );
    const userGivenPassword = getInputFieldValueById( "userPassword" );

    // userLogin function calling:
    userLogin( userGivenEmail, userGivenPassword );
});