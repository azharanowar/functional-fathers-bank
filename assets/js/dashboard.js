document.getElementById("depositBtn").addEventListener('click', function() {
    const newDepositAmount = getInputFieldFloatValueById("newDepositAmount");
    const totalDepositAmount = getInputFieldFloatValueById("totalDepositAmount");
    console.log(newDepositAmount, totalDepositAmount);
});