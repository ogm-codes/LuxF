const openLogin = document.querySelector('.user-action-btn[aria-label="user"');
const formContainer = document.getElementsByClassName('.form_container');
const closeLogin = document.getElementsByClassName('.form_close');
const userLogin = document.querySelector('.button');

//user icon 
function userLoginClick() {
    console.log("user btn clicked");
    
}

function closeForm() {
    console.log("close form");
}

openLogin.addEventListener('click', userLoginClick);
closeLogin.addEventListener('click', closeForm);