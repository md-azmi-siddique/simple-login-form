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
    var depositNumber = getInput("addDepositMoney")

    updateValueOfDepositAndCash('depositMoney', depositNumber)
    updateValueOfDepositAndCash('balanceMoney', depositNumber)

    document.getElementById("addDepositMoney").value = ""; //make the input blank again
})
 
//withdraw cash amount
var withdrawButton = document.getElementById('withdrawButton')
withdrawButton.addEventListener('click', function(){
    var withdrawNumber = getInput("addWithdrawMoney")
    updateValueOfDepositAndCash('withdrawMoney', withdrawNumber);
    updateValueOfDepositAndCash('balanceMoney', -1 * withdrawNumber)
    document.getElementById("addWithdrawMoney").value = "";
})

function updateValueOfDepositAndCash(id, depositNumber){
    var currentBalance = document.getElementById(id).innerText
    var currentBalanceNumber = parseFloat(currentBalance)
    var totalBalance = depositNumber + currentBalanceNumber
    document.getElementById(id).innerText = totalBalance
}

function getInput(id){
    var amount = document.getElementById(id).value;
    var number = parseFloat(amount)
    return number
}
