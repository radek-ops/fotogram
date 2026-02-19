"use strict";


let holidayData = [
    {
        src: "./img/img_1.jpg",
        alt: "Ein Fels in der Brandung",
        title: "-1. Jamaika-2024-"
    },
    {
        src: "./img/img_2.JPG",
        alt: "Strand aus der sicht des im Wasser stehenden",
        title: "-2. Zypern 2024-"
    },
    {
        src: "./img/img_3.JPG",
        alt: "Ruhiges Meer und Sonnuntergang",
        title: "-3. Jamaika-2024-"
    },
    {
        src: "./img/img_4.JPG",
        alt: "Palmen am Strand bunt beleuchtet",
        title: "-4. Lanzerote 2023-"
    },
    {
        src: "./img/img_5.JPG",
        alt: "Gold-Oranger Sonnenuntergang",
        title: "-5. Jamaika-2024-"
    },
    {
        src: "./img/img_6.JPG",
        alt: "Nachts, Palmengasse zum Hotelzimmer schön beleuchtet",
        title: "-6. Jamaika-2024-"
    },
    {
        src: "./img/img_7.jpg",
        alt: "Blick aus einen Flugzeug, Wolken, Sonnenuntergang am Horizont",
        title: "-7. Dom.Rep. 2022-"
    },
    {
        src: "./img/img_8.JPG",
        alt: "Foto von einer nahenden Wasserwelle",
        title: "-8. Zypern 2024-"
    },
    {
        src: "./img/img_9.JPG",
        alt: "Strand, Liegen, Sonnenschirm, lauer wolkenloser Himmel",
        title: "-9. Jamaika-2020-"
    },
    {
        src: "./img/img_10.JPG",
        alt: "Eine Felsenbucht mit Turkisem Wasser",
        title: "-10. Jamaika-2024-"
    },
    {
        src: "./img/img_11.JPG",
        alt: "Ein halbrunder Steg der ins Wasser ragt, wird von einer Welle gertoffen",
        title: "-11. Zypern 2024-"
    },
    {
        src: "./img/img_12.JPG",
        alt: "Sonnen untergang mit leicht rauhen Meer",
        title: "-12. Zypern 2024-"
    },
    {
        src: "./img/img_13.jpg",
        alt: "Strand, Blauer Himmel, Segelschiff",
        title: "-13. Jamajka 2020-"
    },
    {
        src: "./img/img_14.jpg",
        alt: "Großer Swimmingpool, Palmen, klares blaues Wasser",
        title: "-14. Curacao 2021-"
    },
    {
        src: "./img/img_15.jpg",
        alt: "Bach und ein idylischer kleiner Wasserfall",
        title: "-15. Jamaika-2020-"
    },
    {
        src: "./img/img_16.jpg",
        alt: "Grosse Steine, Meerwasser übergang von Glasklar zu Blau.",
        title: "-16. Curacao 2021-"
    },
    {
        src: "./img/img_17.jpg",
        alt: "Strandhütte, hohe Palmen, turkises Wasser",
        title: "-17. Curacao 2021-"
    },
    {
        src: "./img/img_18.jpg",
        alt: "Sonnenuntergang, sicht vom Starnd aus",
        title: "-18. Jamaika-2020-"
    },
    {
        src: "./img/img_19.jpg",
        alt: "Sonnenuntergang, die Palmenblätter und der Sommenschirm wirkrn daduch Schwarz",
        title: "-19. Jamaika-2020-"
    },
    {
        src: "./img/img_20.jpg",
        alt: "Grosser Swimmingpool nachts blau beleucht",
        title: "-20. Zypern 2020-"
    }
];

let holidayImages = document.getElementById("holidayImages");
let dialogsRef = document.getElementById("dialogs");
dialogsRef.innerHTML = fullDialogHtml();
let currentImg;
let currentImgIndex;
let imgObjList = [];

function init() {
    addHolidayImgList();
}

function fullDialogHtml() {
    return dialogHtmlHeaderContendTpl() + dialogHtmlSectionContentTpl() + dialogfooterHtmlContentTpl();
}

function addHolidayImgList() {
    for (let index = 0; index < holidayData.length; index++) {
        imgObjList.push(holidayData[index]);
        holidayImages.innerHTML += getImagesTpl(imgObjList[index], index);
    }
}

function openlargeHolidayImg(anchorContent, imgIndex) {
    let img = anchorContent.querySelector('img');
    let imgModal = document.getElementById("imgModal");
    imgModal.src = img.src;
    imgModal.alt = img.alt;
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
    imgModal.src = imgObjList[currentImgIndex].src;
    imgModal.alt = imgObjList[currentImgIndex].alt;
    dialogsRef.showModal();
    dialogHeadLine();
}

function clickButtonPrevious() {
    currentImgIndex--;
    if (currentImgIndex <= 0) {
        currentImgIndex = 19;
    }
    let imgModal = document.getElementById("imgModal");
    imgModal.src = imgObjList[currentImgIndex].src;
    imgModal.alt = imgObjList[currentImgIndex].alt;
    dialogsRef.showModal();
    dialogHeadLine();
}

function dialogHeadLine() {
    let headline = document.getElementById('imgTitle');
    headline.innerHTML = imgObjList[currentImgIndex].title;
}

function buttonCloseDialog() {
    dialogsRef.close();
}

function closeDialogOutsite(event) {
    event.stopPropagation();
}



