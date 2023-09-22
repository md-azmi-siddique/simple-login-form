//for login
var button = document.getElementById('button')
button.addEventListener('click', function(){
    var loginForm = document.getElementById('login-form');
    loginForm.style.display = "none";

    var displayBlock = document.getElementById('home')
    displayBlock.style.display = 'block'
    var titleNameHome = document.getElementById('title-name'); //change title name
    titleNameHome.innerText = 'my page';
})

//deposit money
var depositButton = document.getElementById('depositButton')
depositButton.addEventListener('click', function(){
    var depositAmount = document.getElementById("addDepositMoney").value;
    var depositNumber = parseFloat(depositAmount)

    updateValueOfDepositAndCash('depositMoney', depositNumber)
    updateValueOfDepositAndCash('balanceMoney', depositNumber)

    document.getElementById("addDepositMoney").value = ""; //make the input blank again
})
 
//withdraw cash amount
var withdrawButton = document.getElementById('withdrawButton')
withdrawButton.addEventListener('click', function(){
    var withdrawAmount = document.getElementById("addWithdrawMoney").value;
    var withdrawNumber = parseFloat(withdrawAmount)
    updateValueOfDepositAndCash('withdrawMoney', withdrawNumber);

    

})

function updateValueOfDepositAndCash(id, depositNumber){
    var currentBalance = document.getElementById(id).innerText
    var currentBalanceNumber = parseFloat(currentBalance)
    var totalBalance = depositNumber + currentBalanceNumber
    document.getElementById(id).innerText = totalBalance
}
