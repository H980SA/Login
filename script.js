const btnSignUp = document.getElementById('sign-up'),
    btnSignIn = document.getElementById('sign-in'), 
    formregister = document.querySelector('.register'),
    formlogin = document.querySelector('.login');

btnSignIn.addEventListener('click', e => {
    formregister.classList.add('hide');
    formlogin.classList.remove('hide');
})
let a = "hora";