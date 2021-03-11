const calc = (sizeArt, materialArt, optionsArt, promoArt, sumArt) => {

    const size = document.querySelector(sizeArt),
        material = document.querySelector(materialArt),
        options = document.querySelector(optionsArt),
        promo = document.querySelector(promoArt),
        sum = document.querySelector(sumArt);

    function calcSum () {
        let calcSum = Math.round((+size.value) + (+material.value) + (+options.value));

        if (size.value == '' || material.value == '') {
            sum.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
        } else if (promo.value === 'IWANTPOPART') {
            sum.textContent = Math.round(calcSum * 0.7);
        } else {
            sum.textContent = calcSum;
        }
    }

    size.addEventListener('change', calcSum);
    material.addEventListener('change', calcSum);
    options.addEventListener('change', calcSum);
    promo.addEventListener('input', calcSum);
};

export default calc;