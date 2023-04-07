const menuLink = Array.from(document.getElementsByClassName('menu__link')); 
const menuItems = Array.from(document.getElementsByClassName('menu_sub')); 
let indexNav;
 
menuLink.forEach((element, index) => {
    if(element.nextElementSibling != null){ 
        element.onclick = function() { 
            
            if (index === indexNav) { 
                element.nextElementSibling.classList.remove('menu_active'); 
                indexNav = null;  
                return false; 
            } else { 
                
                menuItems.forEach((activeElement) => { 
                    if(activeElement.classList.contains('menu_active')) { 
                        activeElement.classList.remove('menu_active'); 
                    };
                })
                
                element.nextElementSibling.classList.add('menu_active'); 
                indexNav = index; 
                return false;
            }
        }
    }
})