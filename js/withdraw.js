// step-1:add event handler with the withdraw button

document.getElementById('btn-withdraw').addEventListener('click',function(){
    // step-2:get the withdraw amount from the withdraw input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // step-7:
    withdrawField.value = '';
    if(isNaN(newWithdrawAmount)){
        alert('Please Provide a Valid Amount Number!!');

        return;
    }
//    step-3:
const totalWithdrawElement = document.getElementById('total-withdraw');
const previousTotalWithdrawString = totalWithdrawElement.innerText;
const previousTotalWithdraw = parseFloat(previousTotalWithdrawString);


    // step-5: get the previous balance   total
    const totalBalanceElement = document.getElementById('total-balance');
    const previousTotalBalanceString = totalBalanceElement.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceString);

    if(newWithdrawAmount > previousTotalBalance){
        alert('Insufficient Balance!!');
        return;
    }
    // step-4:
    const currentWithdrawTotal = previousTotalWithdraw + newWithdrawAmount;
    totalWithdrawElement.innerText = currentWithdrawTotal;
// step-6:calculate new total balance
const newTotalBalance = previousTotalBalance - newWithdrawAmount;
totalBalanceElement.innerText = newTotalBalance;

    


})