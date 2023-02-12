// Step-1: add event listener to the deposit button

document.getElementById('btn-deposit').addEventListener('click',function(){
    // step-2: get the deposit amount from the deposit input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
// step 7: clear the depostie field
    depositField.value = '';
    if(isNaN(newDepositAmount)){
        alert('Please Provide a Valid Amount Number!!');

        return;
    }

    // step-3: get the current deposit total
    // for non-input(element other than input,textarea)use innerText to get the text

    const totalDepositElement = document.getElementById('total-deposit');
    const previousTotalDepositString = totalDepositElement.innerText;
    const previousTotalDeposit = parseFloat(previousTotalDepositString);

    totalDepositElement.innerText = newDepositAmount;
// step-4:add numbers to set the total deposit

    const currentDepositTotal = previousTotalDeposit + newDepositAmount;
    totalDepositElement.innerText = currentDepositTotal;
// step-5: get balance  current total
    const totalBalanceElement = document.getElementById('total-balance');
    const previousTotalBalanceString = totalBalanceElement.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceString);
   

    // step-6:calculate current total balance
    const currentTotalBalance = previousTotalBalance + newDepositAmount;
    // set the balance total
    totalBalanceElement.innerText = currentTotalBalance;
    








})