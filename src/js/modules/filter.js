const filter = () => {

    const menu = document.querySelector('.portfolio-menu'),
        items = menu.querySelectorAll('li'),
        wrapper = document.querySelector('.portfolio-wrapper'),
        blocks = wrapper.querySelectorAll('.portfolio-block'),
        noBlock = document.querySelector('.portfolio-no');

    function filterPortrait(block) {
        blocks.forEach((item, i) => {
            item.style.display = 'none';
            if (item.classList.contains(block)) {
                blocks[i].classList.add('animated', 'fadeIn');
                blocks[i].style.display = 'block';
            } else {
                noBlock.classList.add('animated', 'fadeIn');
                noBlock.style.display = 'block';
                
            }
        });
    }

    menu.addEventListener('click', (e) => {
        let target = e.target,
            block = target.className;
        if (target && target.tagName == 'LI') {
            items.forEach(item => {
                item.classList.remove('active');
                target.classList.add('active');
            });
            filterPortrait(block);
        }
    });
};

export default filter;