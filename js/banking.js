
// function doubleIt(num){
//     const result = num * 2;
//     return result;
// }
// const first = double(7);
// const second = double(5);



document.getElementById('deposit-button').addEventListener('click', function () {
    const inputDeposit = document.getElementById('deposit-input');
    const inputDepositAmount = parseFloat(inputDeposit.value);
    
    //current deposit
    const depositTotal = document.getElementById('deposit-total');
    const previousDeposit = parseFloat(depositTotal.innerText);

   

    depositTotal.innerText = previousDeposit + inputDepositAmount;


    const balanceTotal = document.getElementById('balance-total');

    const presentBalanceTotal = parseFloat(balanceTotal.innerText);

    balanceTotal.innerText = inputDepositAmount + presentBalanceTotal;

    


   inputDeposit.value ='';

})

document.getElementById('withdraw-button').addEventListener('click', function(){

    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawInput = parseFloat(withdrawInput.value);

    

   const withdrawAmount = document.getElementById('withdraw');
   const previousWithdrawAmount = parseFloat(withdrawAmount.innerText);

   const totalWithdraw = newWithdrawInput + previousWithdrawAmount;

   withdrawAmount.innerText = totalWithdraw;


   const balanceTotal = document.getElementById('balance-total');

   const balanceTotalAmount = balanceTotal.innerText;

   const newBalance = balanceTotalAmount - newWithdrawInput;

   balanceTotal.innerText = newBalance;

    



})