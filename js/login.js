const openLogin = document.querySelector('.user-action-btn[aria-label="user"');
const formContainer = document.querySelector('.form_container');
const closeLogin = document.querySelector('.form_close');
const userLogin = document.querySelector('.button');


//user icon 
function userLoginClick() {
    console.log("user btn clicked");
    formContainer.style.display = formContainer.style.display === 'none' ? 'block' : 'none';
    
}

function closeForm() {
//Fix
    console.log("close form");
}

openLogin.addEventListener('click', userLoginClick);
closeLogin.addEventListener('click', closeForm);