import {
    getResource
} from '../services/requests';

const loadMoreItems = (triggerSelector, wrapper) => {
    const trigger = document.querySelector(triggerSelector);

    trigger.addEventListener('click', function () {
        getResource('assets/db.json') // db.json (нужно обращаться к свойству)
            .then(res => createStyles(res.styles)) // .styles - обращаемся к свойству db.json / styles
            .catch(res => console.log(res.status));
            trigger.remove();
    });

    function createStyles(response) {

        response.forEach(({src, title, link}) => {
            let style = document.createElement('div');

            style.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
            style.innerHTML = `
                <div class=styles-block>
                    <img src=${src} alt="styles">
                    <h4>${title}</h4>
                    <a href=${link}>Подробнее</a>
                </div>
             `;
            document.querySelector(wrapper).appendChild(style);
        });
    }

    // items.forEach(item => {
    //     item.classList.add('animated', 'fadeInUp');
    // });

    // trigger.addEventListener('click', () => {
    //     if (!pressed) {
    //         items.forEach(item => {
    //             item.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
    //             item.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
    //         });
    //         trigger.textContent = "Посмотреть меньше стилей";
    //         pressed = true;
    //     } else {
    //         items.forEach(item => {
    //             item.classList.remove('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
    //             item.classList.add('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
    //             pressed = false;
    //         });
    //         trigger.textContent = "Посмотреть больше стилей";
    //     }
    // });

};

export default loadMoreItems;