document.getElementById("depositBtn").addEventListener('click', function() {
    const newDepositAmount = getInputFieldValueById("newDepositAmount");
    const newDepositAmountFloat = parseFloat(newDepositAmount);
    if ( newDepositAmount === "" ) {
        alert("Deposit amount can't be empty!!!");
        inputFieldValueClear( "newDepositAmount" );
        return;
    } else if ( isNaN( newDepositAmountFloat ) || newDepositAmountFloat < 0 ) {
        alert("Deposit amount most be a positive number!!!");
        inputFieldValueClear( "newDepositAmount" );
        return;
    } else {
        // All condition passed for deposit...
        let totalDepositAmountFloat = parseFloat( getElementInnerTextValueById("totalDepositAmount") );
        totalDepositAmountFloat += newDepositAmountFloat;
        setElementInnerTextById( "totalDepositAmount", totalDepositAmountFloat );

        let totalAvailableBalance = parseFloat( getElementInnerTextValueById("totalAvailableBalance") );
        totalAvailableBalance += newDepositAmountFloat;
        setElementInnerTextById( "totalAvailableBalance", totalAvailableBalance );

        inputFieldValueClear( "newDepositAmount" );
    }
});


document.getElementById("withdrawBtn").addEventListener('click', function() {
    const newWithdrawAmount = getInputFieldValueById("newWithdrawAmount");
    let totalAvailableBalance = parseFloat( getElementInnerTextValueById("totalAvailableBalance") );
    const newWithdrawAmountFloat = parseFloat(newWithdrawAmount);
    if ( newWithdrawAmount === "" ) {
        alert("Withdraw amount can't be empty!!!");
        inputFieldValueClear( "newWithdrawAmount" );
        return;
    } else if ( isNaN( newWithdrawAmountFloat ) || newWithdrawAmountFloat < 0 ) {
        alert("Withdraw amount most be a positive number!!!");
        inputFieldValueClear( "newWithdrawAmount" );
        return;
    } else if ( newWithdrawAmountFloat > totalAvailableBalance ) {
        alert("You don't have enough money to withdraw, Please deposit more money first!!!");
        inputFieldValueClear( "newWithdrawAmount" );
        return;
    } else {
        // All condition passed for withdraw...
        let totalWithdrawnAmount = parseFloat( getElementInnerTextValueById("totalWithdrawnAmount") );
        totalWithdrawnAmount += newWithdrawAmountFloat;
        setElementInnerTextById( "totalWithdrawnAmount", totalWithdrawnAmount );

        
        totalAvailableBalance -= newWithdrawAmountFloat;
        setElementInnerTextById( "totalAvailableBalance", totalAvailableBalance );

        inputFieldValueClear( "newWithdrawAmount" );
    }
});