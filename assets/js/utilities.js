function getInputFieldFloatValueById( inputFieldId ) {
    const inputFieldFloatValue = parseFloat( document.getElementById( inputFieldId ).value );
    if( inputFieldFloatValue === "" ) {
        alert("Input field can't be empty!!!");
    } else if( isNaN( inputFieldFloatValue ) ) {
        alert("You most provide a valid number!!!");
    } else {
        return inputFieldFloatValue;
    }
}

function getElementFloatValueById( elementId ) {
    return parseFloat( document.getElementById( elementId ).innerText );
    
}


function userLogin( userGivenEmail, userGivenPassword) {
    // Check if email and password are valid or not
    const userEmail = "azharanowar@gmail.com";
    const userPassword = "123456";
    if ( userGivenEmail === "" || userGivenPassword === "" ) {
        alert("Email or password field can't be empty!!!");
    } else if ( userEmail === userGivenEmail && userPassword === userGivenPassword ) {
        window.open("bank-dashboard.html", "_self");
    } else {
        alert("Invalid email or password! Please provide valid login info!!!");
    }
}