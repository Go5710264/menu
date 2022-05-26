const menuLink = Array.from(document.getElementsByClassName('menu__link')); // массив с ссылками навигационного меню 
const menuItems = Array.from(document.getElementsByClassName('menu_sub')); // массив с из .menu_sub


menuLink.forEach((element) => {
    if(element.nextElementSibling != null){ // если есть дочерний элемент
        element.onclick = function() {
            menuItems.forEach((activeElement) => { // итерация по menuItems
                if(activeElement.classList.contains('menu_active')) { // если есть элемент с .menu_active
                    activeElement.classList.remove('menu_active'); // удалить .menu_active
                };
            })
            element.nextElementSibling.classList.add('menu_active'); // к дочернему элементу добавить menu_active
            return false;
        }
    }
})