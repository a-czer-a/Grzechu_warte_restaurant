
const cacheVersion = 'v1';

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheVersion).then(cache =>
            cache.addAll([
            './',
            'js/app.js',
            './js/google-map.js',
            './js/blazy.js',
            './css/app.css',
            './node_modules/jquery/dist/jquery.js',
            './node_modules/what-input/dist/what-input.js',
            './node_modules/foundation-sites/dist/js/foundation.js',
            './img/',
            './webfonts/',
            // './webfonts/oswald-v16-latin-regular.ttf',
            // './webfonts/oswald-v16-latin-regular.woff',
            // './webfonts/oswald-v16-latin-regular.woff2',
            // './webfonts/oswald-v16-latin-600.ttf',
            // './webfonts/oswald-v16-latin-600.woff',
            // './webfonts/oswald-v16-latin-600.woff2',
            './img/svg/burger.svg',
            './img/svg/chef-hat.svg',
            './img/svg/coffee.svg',
            './img/svg/fried-potatoes.svg',
            './img/svg/noodles.svg',
            './img/svg/pizza.svg',
            './img/svg/salad.svg',
            './img/webp/grzechu-warte-logo.webp',
            './img/webp/burger2-round.webp',
            './img/img-tiny-jpg/mobile/burger2-round-mobile.jpg',
            './img/img-tiny-jpg/medium/burger2-round-medium.jpg',
            './img/img-tiny-jpg/mobile/kids2-round-mobile.jpg',
            './img/img-tiny-jpg/medium/kids2-round-medium.jpg',
            './img/img-tiny-jpg/burger2-round.jpg',
            './img/grzechu-warte-logo.jpg',
            './img/webp/pizza-round2.webp',
            './img/img-tiny-jpg/pizza-round2.jpg',
            './img/img-tiny-jpg/mobile/pizza-round2-mobile.jpg',
            './img/img-tiny-jpg/medium/pizza-round2-medium.jpg',
            './img/webp/kids2-round.webp',
            './img/img-tiny-jpg/kids2-round.jpg',
            './index.html',
            ]))
    );
});


self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});