const menuLink = Array.from(document.getElementsByClassName('menu__link'));
// const menuSub = document.querySelectorAll('.menu_sub')
// console.log(menuSub);

menuLink.forEach((element) => {
    if(element.nextElementSibling != null){
        element.onclick = function() {
            element.nextElementSibling.classList.add('menu_active');
        }
    }
    // console.log(element.nextElementSibling != null);
    // element.click = function() {
    //     console.log(element.querySelector('menu menu_sub'));
    // }
})