const mainMenu = document.querySelector('#main__menu')
const mainButton = mainMenu.querySelectorAll('button');

mainButton.forEach(function (item) {
    item.addEventListener('click', displaying);
})

function displaying(item) {
    
    const calc = document.querySelector('.main__datecalc')
    const timer = document.querySelector('.main__timer')

    if (item.target.id == 2) {
        calc.style.display = 'none';
        timer.style.display = 'block';
    }

    if (item.target.id == 1) {
        calc.style.display = 'block';
        timer.style.display = 'none';
    }

}