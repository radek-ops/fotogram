"use strict";

let holidayImgList = [
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
    "./img/img_13.jpg",
    "./img/img_14.jpg",
    "./img/img_15.jpg",
    "./img/img_16.jpg",
    "./img/img_17.jpg",
    "./img/img_18.jpg",
    "./img/img_19.jpg",
    "./img/img_20.jpg",
];

let altText = [
    "Ein Fels in der Brandung ",
    "Strand aus der sicht des im Wasser stehenden",
    "Ruhiges Meer und Sonnuntergang",
    "Palmen am Strand bunt beleuchtet ",
    "Gold-Oranger Sonnenuntergang",
    "Nachts, Palmengasse zum Hotelzimmer schön beleuchtet",
    "Blick aus einen Flugzeug, Wolken, Sonnenuntergang am Horizont",
    "Foto von einer nahenden Wasserwelle ",
    "Strand, Liegen, Sonnenschirm, lauer wolkenloser Himmel ",
    "Eine Felsenbucht mit Turkisem Wasser",
    " Ein halbrunder Steg der ins Wasser ragt, wird von einer Welle gertoffen",
    "Sonnen untergang mit leicht rauhen Meer",
    " Starnd, Blauer Himmel, Segelschiff ",
    "Großer Swimmingpool, Palmen, klares blaues Wasser",
    "Bach und ein idylischer kleiner Wasserfall",
    " Grosse Steine, Meerwasser übergang von Glasklar zu Blau.",
    "Strandhütte, hohe Palmen, turkises Wasser ",
    " Sonnenuntergang, sicht vom Starnd aus ",
    "Sonnenuntergang, die Palmenblätter und der Sommenschirm wirkrn daduch Schwarz",
    " Grosser Swimmingpool nachts blau beleucht",
];

let titleText = ["-1. Jamaika-2024-", "-2. Zypern 2024-", "-3. Jamaika-2024-", "-4. Lanzerote 2023-", "-5. Jamaika-2024-", "-6. Jamaika-2024-", "-7. Dom.Rep. 2022-", "-8. Zypern 2024-", "-9. Jamaika-2020-",
    "-10. Jamaika-2024-", "-11. Zypern 2024-", "-12. Zypern 2024-", "-13. Jamajka 2020- ", "-14. Curacao 2021-", "-15. Jamaika-2020-", "-16. Curacao 2021-", "-17. Curacao 2021-", "-18. Jamaika-2020-",
    "-19. Jamaika-2020-", "-20. Zypern 2020-"

];


let holidayImages = document.getElementById("holidayImages");
let dialogsRef = document.getElementById("dialogs");
dialogsRef.innerHTML = fullDialogHtml();
let currentImg;
let currentImgIndex;


function init() {
    addHolidayImgList();
}



function fullDialogHtml() {
    return dialogHtmlHeaderContend() + dialogHtmlSectionContent() + dialogfooterHtmlContent();
}



function addHolidayImgList() {
    for (let index = 0; index < holidayImgList.length; index++) {
        holidayImages.innerHTML += getImages(index);
    }
}

function getImages(imgListIndex) {
    return `<a href="#" class="thumbnails_WCAG" onclick="openlargeHolidayImg(this, ${[imgListIndex]})" tabindex="0">
    <img  class="thumbnails"  src="${holidayImgList[imgListIndex]}" alt="${altText[imgListIndex]}"  title="${titleText[imgListIndex]}" >
    </img>
    </a>`;
}


function openlargeHolidayImg(anchorCentent, imgIndex) {
    let img = anchorCentent.querySelector('img');
    let imgModal = document.getElementById("imgModal");
    imgModal.src = img.src;
    imgModal.alt = img.alt;
    imgModal.title = img.title;
    dialogsRef.showModal();
    currentImg = img;
    currentImgIndex = imgIndex;
    dialogHeadLine();
}


function clickButtonForward() {
    currentImgIndex++;
    if (currentImgIndex >= 20) {
        currentImgIndex = 0;
    }
    let imgModal = document.getElementById("imgModal");
    imgModal.src = holidayImgList[currentImgIndex];
    dialogsRef.showModal();
    dialogHeadLine();
}


function clickButtonPrevious() {
    currentImgIndex--;
    if (currentImgIndex <= 0) {
        currentImgIndex = 19;
    }

    let imgModal = document.getElementById("imgModal");
    imgModal.src = holidayImgList[currentImgIndex];
    dialogsRef.showModal();
    dialogHeadLine();
}


function dialogHeadLine() {
    let headline = document.getElementById('imgTitle');
    headline.innerHTML = titleText[currentImgIndex];
}


function buttonCloseDialog() {
    dialogsRef.close();
}

function closeDialogOutsite(event) {
    event.stopPropagation();
}



