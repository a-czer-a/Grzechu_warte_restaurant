$(document).foundation();

$(document).ready(function() {
    var bLazy = new Blazy();
    adjustImgHeight();
});

const menu = document.getElementById('responsive-menu');
const link = menu.getElementsByTagName('li');

function hideMenuOnClick() {
    if (Foundation.MediaQuery.is('small only')) {
        menu.style.display = 'none';
    }
}

function adjustImgHeight() {
    const dynamicHeight = $('.gallery-img').width();
    $('.gallery-img').css({
      'height': dynamicHeight + 'px'
  });
}    

window.addEventListener('resize', adjustImgHeight);
menu.addEventListener('click', hideMenuOnClick);


// EXTRA INFO BUTTON
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

// GALLERY
$('.sim-thumb').on('click', function() {
    $('#main-product-image').attr('src', $(this).data('image'));
})  