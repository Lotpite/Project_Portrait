const burger = (triggerSelector, menuSelector) => {

    const btn = document.querySelector(triggerSelector),
        menu = document.querySelector(menuSelector);

    menu.style.display = 'none';

    btn.addEventListener('click', () => {
        if (menu.style.display == 'none' && window.screen.availWidth < 993) {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    });

    window.addEventListener('resize', () => {
        if (window.screen.availWidth > 992) {
            menu.style.display = 'none';
        }
    });

};

export default burger;