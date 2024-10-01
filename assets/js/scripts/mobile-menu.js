import { disableScroll, enableScroll } from "./helpers";


document.addEventListener('DOMContentLoaded', () => {
    /** Mobile menu */
    const burger = document.querySelector('.header-burger');
    const headerMenu = document.querySelector('.header-menu');
    const closeButton = document.querySelector('.header-close');

    if (burger && headerMenu && closeButton) {
        burger.addEventListener('click', e => {
            e.preventDefault();

            headerMenu.classList.add('active');
            disableScroll();
        });

        closeButton.addEventListener('click', e => {
            e.preventDefault();

            headerMenu.classList.remove('active');
            enableScroll();
        });
    }
});