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



function initMap()   {   
    var position = new google.maps.LatLng(50.120472, 18.397571);
    var markerIcon = '../img/map-marker-black.png';
    var content = '<div class="infowindow">Rybnicka 43,<br> 44-295 Lyski</div>'
    var styles = [
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": "0"
                },
                {
                    "lightness": "100"
                }
            ]
        },
        {
            "featureType": "landscape.man_made",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "lightness": "-12"
                },
                {
                    "saturation": "-91"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": "0"
                },
                {
                    "lightness": "6"
                }
            ]
        },
        {
            "featureType": "poi.school",
            "elementType": "all",
            "stylers": [
                {
                    "lightness": "27"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#eceaea"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#808080"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#5b0202"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "weight": "5.98"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#cccccc"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#000000"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "weight": "4.00"
                },
                {
                    "saturation": "1"
                },
                {
                    "gamma": "1.00"
                },
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "weight": "2.84"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "lightness": "23"
                }
            ]
        }
    ];

    var mapOptions = {
        zoom: 15,
        center: position,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: styles,
    };
            
    var map = new google.maps.Map(document.getElementById("map"), mapOptions); 
    var marker = new google.maps.Marker({
            position: position, 
            map: map,
            icon: {
                url: markerIcon,
                // scaledSize: new google.maps.Size(48, 48)
	       }      
    });
    
   var infowindow = new google.maps.InfoWindow({
       content: content,
       maxWidth: 200,
   });
   
   infowindow.open(map, marker);
}   


$('.sim-thumb').on('click', function() {
    $('#main-product-image').attr('src', $(this).data('image'));
  })
  