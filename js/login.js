const openLogin = document.querySelector('.user-action-btn[aria-label="user"');
const formContainer = document.querySelector('.form_container');
const closeLogin = document.querySelector('.form_close');
const signuplink = document.querySelector('#signup');
const userLogin = document.querySelector('.loginbutton');
const userSignup = document.querySelector('.signupbutton');
const loginForm = document.querySelector('.login_form');
const signupForm = document.querySelector();


//user icon 
function userLoginClick() {
    console.log("user btn clicked");
    formContainer.style.display = formContainer.style.display === 'none' ? 'block' : 'none';
    
}

function closeForm() {
//Fix
    console.log("close form");
    formContainer.style.display = 'none';
}

function signupnewuser() {
    console.log("sign up a new user");

}

openLogin.addEventListener('click', userLoginClick);
closeLogin.addEventListener('click', closeForm);
signuplink.addEventListener('click', signupnewuser);