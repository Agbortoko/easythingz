'use strict';

// navbar variables
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');

// navToggle function
const navToggleFunction = function () { 
    nav.classList.toggle('active'); 
}

navMenuBtn.addEventListener('click', navToggleFunction);
navCloseBtn.addEventListener('click', navToggleFunction);


// theme toggle variables
const body = document.body;
const themeBtn = document.querySelectorAll('.theme-btn');
const currentTheme = localStorage.getItem('currentTheme');


// Check to see if there is a theme preference in local Storage, if so add the ligt theme to the body
if (currentTheme) {
    body.setAttribute('class', 'dark-theme');
}


for(let i = 0; i < themeBtn.length; i++){

    themeBtn[i].addEventListener('click', function(){

        // change button when clicked
        this.classList.toggle('light');
        this.classList.toggle('dark');

        // toggle `light-theme` & `dark-theme` class from `body`
        // when clicked `theme-btn`
        body.classList.toggle('light-theme');
        body.classList.toggle('dark-theme');

        if(body.classList.contains('dark-theme')){
            localStorage.setItem('currentTheme', 'themeActive');
            
        }else{
            localStorage.removeItem('currentTheme')
        }
    });
       

}






