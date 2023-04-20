const menuLink = Array.from(document.getElementsByClassName('menu__link'));
const menuItems = Array.from(document.getElementsByClassName('menu_sub'));
let indexNav;

menuLink.forEach((element, index) => {
  const navigationLink = element;
  const indexElement = index;

  if (navigationLink.nextElementSibling != null) {
    navigationLink.addEventListener('click', (event) => {
      event.preventDefault();

      if (indexElement === indexNav) {
        navigationLink.nextElementSibling.classList.remove('menu_active');
        indexNav = null;
        return false;
      }

      menuItems.forEach((activeElement) => {
        if (activeElement.classList.contains('menu_active')) {
          activeElement.classList.remove('menu_active');
        }
      });

      navigationLink.nextElementSibling.classList.add('menu_active');
      indexNav = indexElement;
      return false;
    });
  }
});
