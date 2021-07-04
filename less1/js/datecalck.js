import {
    formatError
} from "./common.js";

import {
    diffDates, diffToHtml
} from "./diffDates.js";


const dateCalcForm = document.getElementById('datecalc');
const dateCalcResult = document.getElementById('datacalc__result');

dateCalcForm.addEventListener("submit", handeleCalcDates);


function handeleCalcDates(event) {
    dateCalcResult.innerHTML = '';
    event.preventDefault();
    let {
        firstDate,
        secondDate
    } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;


    if (firstDate && secondDate) {
        const result = diffDates(firstDate, secondDate);
        dateCalcResult.innerHTML = diffToHtml(result);
    } else {
        dateCalcResult.innerHTML = formatError('Для расчета промежутка заполни оба поля!');
    }
}