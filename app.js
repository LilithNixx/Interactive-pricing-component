import _vars from '../sass/_vars.scss';


const views = document.getElementById('views'); 
const price = document.getElementById('price');
const slider = document.getElementById('slider');
const billingbox = document.getElementById('billingbox');
const billingboxLabel = document.querySelector('.billingbox-label');
const monthYear = document.getElementById('month-year');
const form = document.getElementById('form');

const pageviews = ['10K', '50K', '100K', '500K', '1M'];
const pricePerMonth = [8, 12, 16, 24, 36];
const leftToRightArray = [0, 25, 50, 75, 100];

slider.addEventListener('input', updatePrice);

billingbox.addEventListener('click', updatePrice);

form.addEventListener('submit', restart);




function updatePrice() {
    if (slider.value === '0' && billingbox.checked === false) {
        price.textContent = pricePerMonth[0];
        views.textContent = pageviews[0];
        monthYear.textContent = '/month';
    } else if (slider.value === '0' && billingbox.checked === true) {
        price.textContent = (pricePerMonth[0] *12) * 0.75;
        views.textContent = pageviews[0];
        monthYear.textContent = '/year';
    }
    if (slider.value === '1' && billingbox.checked === false) {
        price.textContent = pricePerMonth[1];
        views.textContent = pageviews[1];
        monthYear.textContent = '/month';
    } else if (slider.value === '1' && billingbox.checked === true) {
        price.textContent = (pricePerMonth[1] *12) * 0.75;
        views.textContent = pageviews[1];
        monthYear.textContent = '/year';
    }
    if (slider.value === '2' && billingbox.checked === false) {
        price.textContent = pricePerMonth[2];
        views.textContent = pageviews[2];
        monthYear.textContent = '/month';
    } else if (slider.value === '2' && billingbox.checked === true) {
        price.textContent = (pricePerMonth[2] *12) * 0.75;
        views.textContent = pageviews[2];
        monthYear.textContent = '/year';
    }
    if (slider.value === '3' && billingbox.checked === false) {
        price.textContent = pricePerMonth[3];
        views.textContent = pageviews[3];
        monthYear.textContent = '/month';
    } else if (slider.value === '3' && billingbox.checked === true) {
        price.textContent = (pricePerMonth[3] *12) * 0.75;
        views.textContent = pageviews[3];
        monthYear.textContent = '/year';
    }
    if (slider.value === '4' && billingbox.checked === false) {
        price.textContent = pricePerMonth[4];
        views.textContent = pageviews[4];
        monthYear.textContent = '/month';
    } else if (slider.value === '4' && billingbox.checked === true) {
        price.textContent = (pricePerMonth[4] *12) * 0.75;
        views.textContent = pageviews[4];
        monthYear.textContent = '/year';
    }
}


function restart(e) {
    e.preventDefault();
    
    slider.value = '2';
    price.textContent = '16';
    views.textContent = '100K';
    monthYear.textContent = '/month';
    billingbox.checked = false;
}   

function updateRange() {
    slider.style.setProperty('vars.leftToRight', leftToRightArray[parseInt(slider.value)]);
}