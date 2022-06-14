window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header_menu'),
        menuList = document.querySelectorAll('.header_list'),
        menuSocial = document.querySelectorAll('.header_social'),
        hamburger = document.querySelector('.header_hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header_hamburger_active');
        menu.classList.toggle('header_menu_active');
    });

    menuList.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('header_hamburger_active');
            menu.classList.toggle('header_menu_active');
        })
    })
    menuSocial.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('header_hamburger_active');
            menu.classList.toggle('header_menu_active');
        })
    })


    //modal

    const modal = document.querySelector('.modal'),
        modalBtn = document.querySelector('.modal_btn');
        


    function showModal () {
        modal.classList.toggle('show');
    }

    function hide (element) {
        element.classList.toggle('show');
    }

    modalBtn.addEventListener('click', showModal);

    modal.addEventListener('click', (e) => {
        if(e.target == modal){
            hide(modal);
        }
    });


    //success
    const successBtn = document.querySelectorAll('.success_btn'),
        success = document.querySelector('.success');
    successBtn.forEach(element => {
        element.addEventListener('click', showSuccess);
    });
    function showSuccess () {
        if (window.getComputedStyle(modal).display == 'flex'){
            hide(modal);
            success.classList.toggle('show');
        } else {
            success.classList.toggle('show');
        }
    }
    success.addEventListener('click', (e) => {
        if(e.target == success){
            hide(success);
        }
    });

});

