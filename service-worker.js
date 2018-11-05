const cacheVersion = 'v1';

self.addEventListener('install', event => {
   event.waitUntil(
       caches.open(cacheVersion).then(cache =>
           cache.addAll([
           './',
           'js/app-min.js',
           './js/google-map.js',
           './js/blazy.js',
           './css/app.css',
           './node_modules/jquery/dist/jquery.js',
           './node_modules/what-input/dist/what-input.js',
           './node_modules/foundation-sites/dist/js/foundation.js',
           './img/',
           './webfonts/',
        //    '../fontawesome/css/brands.css',
        //    '../fontawesome/css/solid.css',
           './webfonts/fa-solid-900.woff2',
           './webfonts/fa-solid-900.woff',
           './webfonts/fa-brands-400.woff',
           './webfonts/fa-brands-400.ttf',
           './webfonts/fa-brands-400.woff2',
           './webfonts/oswald-v16-latin-regular.ttf',
           './webfonts/oswald-v16-latin-regular.woff',
           './webfonts/oswald-v16-latin-regular.woff2',
           './webfonts/oswald-v16-latin-600.ttf',
           './webfonts/oswald-v16-latin-600.woff',
           './webfonts/oswald-v16-latin-600.woff2',
           './img/svg/burger.svg',
           './img/svg/chef-hat.svg',
           './img/svg/coffee.svg',
           './img/svg/fried-potatoes.svg',
           './img/svg/noodles.svg',
           './img/svg/pizza.svg',
           './img/svg/salad.svg',
           './img/svg/calendar.svg',
           './img/pattern.jpg',
           './img/webp/grzechu-warte-logo.webp',
           './img/grzechu-warte-shorcut-icon.jpg',
           './img/webp/burger-cutout.webp',
           './img/webp/pizza-cutout-cropped.webp',
           './img/burger-cutout.jpg',
           './img/pizza-cutout-cropped.jpg',
           './img/grzechu-warte-logo.jpg',
           './img/medium/inside-medium.jpg',
           './img/place/inside.jpg',
           './img/webp/outside.webp',
           './img/webp/bar.webp',
           './img/webp/inside5.webp',
           './img/webp/inside6.webp',
           './img/webp/inside7.webp',
           './img/webp/inside3.webp',
           './img/webp/kids.webp',
           './img/webp/burger5.webp',
           './img/webp/obiad.webp',
           './img/webp/deser3.webp',
           './img/webp/deser4.webp',
           './img/webp/pizza.webp',
           './img/webp/pizza2.webp',
           './img/webp/pizza7.webp',
           './img/webp/pizza5.webp',
           './img/webp/salad.webp',
           './img/webp/salad2.webp',
           './img/webp/deser6.webp',
           './img/webp/deser8.webp',
           './img/webp/coffee.webp',


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

