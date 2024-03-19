const openLogin = document.querySelector('.user-action-btn[aria-label="user"');
const formContainer = document.querySelector('.form_container');
const closeLogin = document.querySelector('.form_close');
const signuplink = document.querySelector('#signup');
const loginLink = document.querySelector('#login');
const userLogin = document.querySelector('.loginbutton');
const userSignup = document.querySelector('.signupbutton');
const loginForm = document.querySelector('.login_form');
const signupForm = document.querySelector('signup_form');


//user icon 
function userLoginClick() {
    console.log("user btn clicked");
    formContainer.style.display = formContainer.style.display === 'none' ? 'block' : 'none';
    
}

function closeForm() {
    console.log("close form");
    formContainer.style.display = 'none';
}

function signupnewuser() {
    console.log("sign up a new user");
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
}

function loginExistingUser() {
    console.log("login link clicked");
}

openLogin.addEventListener('click', userLoginClick);
closeLogin.addEventListener('click', closeForm);
signuplink.addEventListener('click', signupnewuser);
loginLink.addEventListener('click', loginExistingUser);