/* wichig  damit nicht ungewollt automatisch eine globale variable erstellt wird
 */
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

/* holidayImages & dialogsRef sind statisch  */

let holidayImages = document.getElementById("holidayImages");
let dialogsRef = document.getElementById("dialogs");
let currentImg;
let currentImgIndex;


function init() {
    addHolidayImgList();
    addOnlickHolidayImages();
    addDialogHeaderAndCloseButton();
    addDialogSection();
    addClassImgInModal();
    addDialogFooterandArrows();


}


function addHolidayImgList() {
    for (let index = 0; index < holidayImgList.length; index++) {
        holidayImages.innerHTML += getImages(index);
    }
}

function getImages(imgListIndex) {
    return `<a href="#" class="thumbnails_WCAG" tabindex="0">
    <img  class="thumbnails" src="${holidayImgList[imgListIndex]}" alt="${altText[imgListIndex]}"  title="${titleText[imgListIndex]}" >
    </img>
    </a>`;
}


function addOnlickHolidayImages() {
    let imgList = document.querySelectorAll(".thumbnails_WCAG");

    for (let index = 0; index < imgList.length; index++) {
        /* mit [index]  wird ein Attribut jedem einzelnen Element zugewiesen */
        /* mit oncklick das greife ich auf  <a href=""><img></a> und nicht das <img> das da drin ist   */
        imgList[index].setAttribute(
            "onclick",
            "openLargeHolidayImg(this, " + index + ")"
        );
    }
}

function addDialogHeaderAndCloseButton() {
    dialogsRef.innerHTML += `<header id="headline" class="dialog_Header" ><h2 id="imgTitle" ></h2>
    <button class="close_button" type="button" onclick="closeLargeHolidayImg()" tabindex="0">&times;</button></header>`;
}



function addDialogSection() {
    dialogsRef.innerHTML += `<section><img id="imgModal" src="" alt="" title=""> </section>`;
}


/* variable imgModal die in function addDialogSection() dynamiasch erstellt wurde
 darf nicht global sein,  sonst wird diese mit null wert initialisiert  */
function addClassImgInModal() {
    let imgModal = document.getElementById("imgModal");
    imgModal.classList.add("lagre_img");
}

function addDialogFooterandArrows() {
    dialogsRef.innerHTML += `<footer id="dialogFooter">
    <div id="arrowContainer" class="arrow_Container"><button id="arrowLeft" class="arrow_button" onclick="clickButtonPrevious()" tabindex="0" type="button">&larr;</button>
    <button id="arrowRight" class="arrow_button" onclick="clickButtonForward()" tabindex="0"  type="button">&rarr;</button></div></footer>`;
}


function openLargeHolidayImg(anchorCentent, imgIndex) {
    console.log(anchorCentent);
    /* suche in anchor mit querySelector('img') nach einem Bild   */
    let img = anchorCentent.querySelector('img');
    console.log(img);


    let imgModal = document.getElementById("imgModal");
    /* kein innerHTML weil hier direkt das img attribut manipuliert wird  */
    imgModal.src = img.src;
    imgModal.alt = img.alt;
    imgModal.title = img.title;
    dialogsRef.showModal();
    currentImg = img;
    console.log(currentImg);
    currentImgIndex = imgIndex;
    dialogHeadLine();
    dialogsRef.classList.add("opend");


}

function closeLargeHolidayImg() {
    dialogsRef.close();

}

function clickButtonForward() {
    /* -1 wegen der Inkrementierung */
    if (currentImgIndex < holidayImgList.length - 1) {
        currentImgIndex++;
        let imgModal = document.getElementById("imgModal");
        /* weise imgModal.src das nächste Bild zu  mit holidayImgList[currentImgIndex]  */
        imgModal.src = holidayImgList[currentImgIndex];
        dialogsRef.showModal();
        dialogHeadLine();
    }
}

function clickButtonPrevious() {
    /*  wegen der Dekrementierung, kann also nicht >= sein  */
    if (currentImgIndex > 0) {
        currentImgIndex--;
        let imgModal = document.getElementById("imgModal");
        imgModal.src = holidayImgList[currentImgIndex];
        dialogsRef.showModal();
        dialogHeadLine();
    }

}

function dialogHeadLine() {
    let headline = document.getElementById('imgTitle');
    headline.innerHTML = titleText[currentImgIndex];
}


