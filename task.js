const menuLink = Array.from(document.getElementsByClassName('menu__link')); // массив с ссылками навигационного меню (в том числе и вложенных)
const menuItems = Array.from(document.getElementsByClassName('menu_sub')); // массив из списков вложенных элементов
let indexNav; // индекс предыдущей ссылки навигационного меню
 
menuLink.forEach((element, index) => { // итерация по ссылкам навигационного меню
    if(element.nextElementSibling != null){ // если есть дочерний элемент
        element.onclick = function() { // обработчик click ссылки навигационного меню
            // закрытие вложенного меню при повторном клике
            if (index === indexNav) { // если индекс предыдущей ссылки навигационного меню = нынешей 
                element.nextElementSibling.classList.remove('menu_active'); // тогда у вложенного элемента удалить .menu_active
                indexNav = null;  
                return false; // завершение работы обработчика событий
            } else { // в остальных случаях
                // удаление ранее открытых меню
                menuItems.forEach((activeElement) => { // итерация по вложенным елементам
                    if(activeElement.classList.contains('menu_active')) { // если есть элемент с .menu_active
                        activeElement.classList.remove('menu_active'); // удалить .menu_active
                    };
                })
                // открытие нового вложенного меню
                element.nextElementSibling.classList.add('menu_active'); // к дочернему элементу добавить menu_active
                indexNav = index; // сохранение текущего индекса ссылки навигационного меню 
                return false; // завершение работы обработчика событий
            }
        }
    }
})