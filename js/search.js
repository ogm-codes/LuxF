//Search feature
const search = document.querySelector('.input-field');
const product = document.querySelector('.product-card');

function searchItem () {
    searchWord = this.value.toLowerCase();
} 

search.addEventListener('keyup', searchItem);