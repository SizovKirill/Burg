//  // MAP_YANDEX
ymaps.ready(init);
var myMap;

function init() {
    myMap = new ymaps.Map("map", {
        center: [59.91817154482064, 30.30557799999997],
        zoom: 11,
        controls: []

    });

    myMap.behaviors.disable('scrollZoom');

    var coords = [
            [59.94505146149202, 30.383168942382756],
            [59.97190952862114, 30.31038451855465],
            [59.89299489481955, 30.31244445507803],
            [59.9157581739814, 30.49577880566329]
        ],
        myCollection = new ymaps.GeoObjectCollection({}, {
            draggable: false, // и их можно перемещать
            iconLayout: 'default#image',
            iconImageHref: '/img/icon/map-marker.png',
            iconImageSize: [46, 57],
            iconImageOffset: [-20, -56]
        });

    for (var i = 0; i < coords.length; i++) {
        myCollection.add(new ymaps.Placemark(coords[i]));
    }

    myMap.geoObjects.add(myCollection);
}


// SCREEN_MENU
$(() => {
    const hamburger = $('.hamburger-mnu__link');
    const fullScreenMenu = $('.screen-menu');
    const fullScreenMenuCloser = fullScreenMenu.find('.screen-menu__btn-exit');

    hamburger.on('click', () => {
        fullScreenMenu.fadeIn(300);
    });
    fullScreenMenuCloser.on('click', (evt) => {
        evt.preventDefault();
        fullScreenMenu.fadeOut(300);
    });
});