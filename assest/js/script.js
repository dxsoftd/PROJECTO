function menushow(){
    let menumobile = document.querySelector('.mobile-menu')
    if(menuMobile.classList.contains('open')){
        menuMobile.classlist.remove('open');
    }
    else {
        menuMobile.classlist.add('open')
    }
}