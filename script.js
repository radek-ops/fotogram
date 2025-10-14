/* funktions start durch  <body onload="startFunction()"> */

function startFunction() {

    createDiv();
    bigImages();


}

let imgArray = [
    "./img/img_1.jpg",
    "./img/img_2.JPG",
    "./img/img_3.JPG",
    "./img/img_4.JPG",
    "./img/img_5.JPG",
    "./img/img_6.JPG",
    "./img/img_7.jpg",
    "./img/img_8.JPG",
    "./img/img_9.JPG",
    "./img/img_10.JPG",
    "./img/img_11.JPG",
    "./img/img_12.JPG",
    "./img/img_15.jpg",
    "./img/img_16.jpg",
    "./img/img_17.jpg",
    "./img/img_19.jpg",
    "./img/img_20.jpg",
    "./img/img_21.jpg",
    "./img/img_22.jpg",
    "./img/img_23.jpg",
];

let altTextArray = ['Ein Fels in der Brandung ', 'Strand aus der sicht des im Wasser stehenden',
    'Ruhiges Meer und Sonnuntergang', 'Palmen am Strand bunt beleuchtet ', 'Gold-Oranger Sonnenuntergang',
    'Nachts, Palmengasse zum Hotelzimmer schön beleuchtet', 'Blick aus einen Flugzeug, Wolken, Sonnenuntergang am Horizont',
    'Foto von einer nahenden Wasserwelle ', 'Strand, Liegen, Sonnenschirm, lauer wolkenloser Himmel ',
    'Eine Felsenbucht mit Turkisem Wasser', ' Ein halbrunder Steg der ins Wasser ragt, wird von einer Welle gertoffen',
    'Sonnen untergang mit leicht rauhen Meer', ' Starnd, Blauer Himmel, Segelschiff ', 'Großer Swimmingpool, Palmen, klares blaues Wasser',
    'Bach und ein idylischer kleiner Wasserfall', ' Grosse Steine, Meerwasser übergang von Glasklar zu Blau.',
    'Strandhütte, hohe Palmen, turkises Wasser ', ' Sonnenuntergang, sicht vom Starnd aus ',
    'Sonnenuntergang, die Palmenblätter und der Sommenschirm wirkrn daduch Schwarz', ' Grosser Swimmingpool nachts blau beleucht'
];


/* images werden hinzugefügt*/
function createDiv() {

    let arry = document.getElementById("all_images");
    arry.innerHTML = ' '; /* main wird geleert  */

    for (let index = 0; index < imgArray.length; index++) {
        let newImg = document.createElement("img");
        newImg.className = 'main_images';
        newImg.setAttribute('src', imgArray[index]);
        newImg.setAttribute('alt', altTextArray[index]);

        /*  dem (elternElement) 'main'  werden die imges zugefügt  */
        arry.appendChild(newImg);

    }

}

function bigImages() {

    let images = document.querySelectorAll('.main_images');
    console.log(images);
    let lightModal = document.getElementById('light_modal');
    let bigBox = document.getElementById('big_box');
    let Modal = document.getElementById('close_light_modal');

    for (let index = 0; index < images.length; index++) {
        images[index].addEventListener('click', function() {
            bigBox.src = this.src; // 'this' bezieht sich auf das geklickte Bild
            lightModal.classList.add('visible'); //
        });
    }

    /* Entferne die 'visible' Klasse, um das Modal zu verstecken */
    lightModal.addEventListener('click', function() {
        lightModal.classList.remove('visible');
    });

    /* schließen, wenn auf den Hintergrund des Modals geklickt wird und  Entferne die 'visible' Klasse
            }   */
    lightModal.addEventListener('click', function(e) {
        if (e.target === lightModal) {
            lightModal.classList.remove('visible');
        }
    });

}