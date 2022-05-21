const menuLink = Array.from(document.getElementsByClassName('menu__link'));

menuLink.forEach((element) => {
    if(element.nextElementSibling != null){
        element.onclick = function() {
            element.nextElementSibling.classList.add('menu_active');
            return false;
        }
    }
})