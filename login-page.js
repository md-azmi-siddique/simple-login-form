var button = document.getElementById('button')

button.addEventListener('click', function(){
    // console.log('hit me')
    var loginForm = document.getElementById('login-form');
    loginForm.style.display = "none";

    var displayBlock = document.getElementById('home')
    displayBlock.style.display = 'block'
    var titleNameHome = document.getElementById('title-name');
    titleNameHome.innerText = 'my page';
})
 