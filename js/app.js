$(document).foundation();

const tabs = document.getElementById('menu-tabs');

const dodatki = document.getElementById('dodatki-tab');
const pizza = document.getElementById('pizza-tab');
const burgery = document.getElementById('burgery-tab');
const makarony = document.getElementById('makarony-tab');
const extra = document.getElementById('extra-tab');
const napoje = document.getElementById('napoje-tab');
const sałatki = document.getElementById('sałatki-tab');


const dodatkiImg = document.getElementById('dodatki-img');
const pizzaImg = document.getElementById('pizza-img');
const burgeryImg = document.getElementById('burgery-img');
const makaronyImg = document.getElementById('makarony-img');
const extraImg = document.getElementById('extra-img');
const napojeImg = document.getElementById('napoje-img');
const sałatkiImg = document.getElementById('sałatki-img');


function changeFoodIconWhenActive() {
        if (dodatki.classList.contains('is-active')) {
            dodatkiImg.src="img/fried-potatoes-color.png";
        } else {
            dodatkiImg.src="img/fried-potatoes.png";
        }

        if (pizza.classList.contains('is-active')) {
            pizzaImg.src="img/pizza-slice-color.png";
        } else {
            pizzaImg.src="img/pizza-slice.png";
        }

        if (burgery.classList.contains('is-active')) {
            burgeryImg.src="img/burger-color.png";
        } else {
            burgeryImg.src="img/burger.png";
        }

        if (makarony.classList.contains('is-active')) {
            makaronyImg.src="img/noodles-color.png";
        } else {
            makaronyImg.src="img/noodles.png";
        }

        if (extra.classList.contains('is-active')) {
            extraImg.src="img/chef-hat-color.png";
        } else {
            extraImg.src="img/chef-hat.png";
        }

        if (napoje.classList.contains('is-active')) {
            napojeImg.src="img/coffee-cup-color.png";
        } else {
            napojeImg.src="img/coffee-cup.png";
        }

        if (sałatki.classList.contains('is-active')) {
            sałatkiImg.src="img/salad-color.png";
        } else {
            sałatkiImg.src="img/salad.png";
        }

    //     // if (dodatkiA.getAttribute('aria-selected') === "true") {
    //     //     dodatkiImg.src="img/fried-potatoes-color.png";
    //     // }
    }

tabs.addEventListener('click', changeFoodIconWhenActive);

function openDivWithInfo() {
    const hiddenInfo = document.getElementById('hidden-info');
    const hiddenInfoBurger = document.getElementById('hidden-info-burger');
    const hiddenInfoNoodle = document.getElementById('hidden-info-noodle');
    const hiddenInfoSalad = document.getElementById('hidden-info-salad');
    const hiddenInfoExtras = document.getElementById('hidden-info-extras');
    const hiddenInfoChef = document.getElementById('hidden-info-chef');

    if (hiddenInfo.style.display === "none") {
        hiddenInfo.style.display = "block";
    } else {
        hiddenInfo.style.display = "none";
    }

    if (hiddenInfoBurger.style.display === "none") {
        hiddenInfoBurger.style.display = "block";
    } else {
        hiddenInfoBurger.style.display = "none";
    }

    if (hiddenInfoNoodle.style.display === "none") {
        hiddenInfoNoodle.style.display = "block";
    } else {
        hiddenInfoNoodle.style.display = "none";
    }

    if (hiddenInfoSalad.style.display === "none") {
        hiddenInfoSalad.style.display = "block";
    } else {
        hiddenInfoSalad.style.display = "none";
    }

    if (hiddenInfoExtras.style.display === "none") {
        hiddenInfoExtras.style.display = "block";
    } else {
        hiddenInfoExtras.style.display = "none";
    }

    if (hiddenInfoChef.style.display === "none") {
        hiddenInfoChef.style.display = "block";
    } else {
        hiddenInfoChef.style.display = "none";
    }




}
