function getInputFieldValueById( inputFieldId ) {
    return document.getElementById( inputFieldId ).value;
}

function getElementInnerTextValueById( elementId ) {
    return document.getElementById( elementId ).innerText;
}

function setElementInnerTextById( elementId, innerTextValue ) {
    document.getElementById( elementId ).innerText = innerTextValue;
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


function inputFieldValueClear( inputFieldId ) {
    document.getElementById( inputFieldId ).value = '';
}