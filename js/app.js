const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
//const body = document.querySelector('body');

//display mobile Menu
menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
   // body.classList.toggle('active');
});


//active scrolling
const highlightMenu = () =>{
    const elem = document.querySelector('highlight');
    const homeMenu = document.querySelector('#home-page');
    const servicesMenu = document.querySelector('#services-page');
    const plansMenu = document.querySelector('#plans-page');
    const trainersMenu = document.querySelector('#trainers-page');
    
    let scrollPos = window.scrollY;
    //console.log(scrollPos);
    
    if(window.innerWidth > 960 && scrollPos <815){
        homeMenu.classList.add('highlight');
        servicesMenu.classList.remove('highlight');
        return;
    }
    else if (window.innerWidth > 960 && scrollPos < 1500){
        servicesMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        plansMenu.classList.remove('highlight');
        return;
    }
    else if (window.innerWidth > 960 && scrollPos < 2112){
        plansMenu.classList.add('highlight');
        servicesMenu.classList.remove('highlight');
        trainersMenu.classList.remove('highlight');
        return;
    }
    else if (window.innerWidth > 960 && scrollPos < 2252){
        trainersMenu.classList.add('highlight');
        plansMenu.classList.remove('highlight');
        servicesMenu.classList.remove('highlight');
    }

    if((elem && window.innerWidth < 960 && scrollPos < 600) || elem){
        elem.classList.remove('highlight');
    }   
}



window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//close mobile Menu
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars){
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
};

menuLinks.addEventListener('click', hideMobileMenu);
//navLogo.addEventListener('click', hideMobileMenu);