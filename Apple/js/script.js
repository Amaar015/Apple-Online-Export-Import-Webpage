
let search_bar =document.querySelector('.search-bar');
document.querySelector('#search-btn').onclick=()=>{
                    search_bar.classList.toggle('active');
                    navbar.classList.remove('active');

}



let navbar =document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick=()=>{
                    navbar.classList.toggle('active');
                    search_bar.classList.remove('active');                    
}

window.onscroll=()=>{
                    navbar.classList.remove('active');
}
