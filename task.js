const menuLink = Array.from(document.getElementsByClassName('menu__link')); // массив с ссылками навигационного меню 
const menuItems = Array.from(document.getElementsByClassName('menu_sub')); // массив с из .menu_sub


menuLink.forEach((element) => {
    if(element.nextElementSibling != null){ // если есть дочерний элемент
        element.onclick = function() {
            menuItems.forEach((activeElement) => {
                if(activeElement.classList.contains('menu_active')) {
                    activeElement.classList.remove('menu_active');
                }; // если есть дочерний элемент
            })
            // необходимо удалить menu_active у другого элемента
            element.nextElementSibling.classList.add('menu_active'); // к дочернему элементу добавить menu_active
            return false;
        }
    }
})