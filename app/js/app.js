window.addEventListener('load', ()=>{


    const modalButton = document.querySelector('#modal__button');
    const modalOverlay = document.querySelector('.modal__overlay');
    const modalClose = document.querySelector('.modal__close');
    const body = document.querySelector('body');
    
    
    modalButton.addEventListener('click', function(){
        modalOverlay.classList.remove('d-none');
        modalOverlay.classList.add('d-block');
        body.classList.add('hide-scroll');
    });
    
    
    modalClose.addEventListener('click', function(){
        modalOverlay.classList.remove('d-block');
        modalOverlay.classList.add('d-none');
        body.classList.remove('hide-scroll');
    });


});

