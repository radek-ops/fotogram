/* wichig  damit nicht ungewollt automatisch eine globale variable erstellt wird
 */
"use strict";

function init() {
  addHolidayImgList();
  addDialogHeaderAndCloseButton();
  addDialogSection();
  addImgInModalClass();
  addDialogFooteranArrows();
  buttonNextImage();
}

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
  "./img/img_15.jpg",
  "./img/img_16.jpg",
  "./img/img_17.jpg",
  "./img/img_19.jpg",
  "./img/img_20.jpg",
  "./img/img_21.jpg",
  "./img/img_22.jpg",
  "./img/img_23.jpg",
];

let altTextArray = [
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

/* holidayImages, dialogsRef sind statisch  */

let holidayImages = document.getElementById("holidayImages");
let dialogsRef = document.getElementById("dialogs");
let currentIndex = 0;

function addHolidayImgList() {
  for (let index = 0; index < holidayImgList.length; index++) {
    holidayImages.innerHTML += returnImg(index);
  }
}

function returnImg(getImgList) {
  return `<img class="thumbnails" src="${holidayImgList[getImgList]}"
          alt="${altTextArray[getImgList]}" 
            onclick="openLargeHolidayImg('${holidayImgList[getImgList]}')"></img>`;
}

function addDialogHeaderAndCloseButton() {
  dialogsRef.innerHTML += `<header id="headline" class="dialog_Header"><h2 id="imgTitle"></h2>
    <button class="close_button" type="button" onclick="closeLargeHolidayImg()">&times;</button></header`;
}

function addDialogSection() {
  dialogsRef.innerHTML += `<section id="largeHolidayImg"><img id="imgInModal" alt="bigPicture"> </section>`;
}

/* variable imgModal die  in function addDialogSection() dynamiasch erstellt wurde
 darf sie nicht global sein,  sonst wird diese mit null wert Initialisiert */
function addImgInModalClass() {
  let imgModal = document.getElementById("imgInModal");
  imgModal.classList.add("imgInModal");
}

function addDialogFooteranArrows() {
  dialogsRef.innerHTML += `<footer id="dialogFooter">
    <div id="arrowContainer" class="arrow_Container"><button  class="arrow_button" type="button">&larr;</button>
    <button class="arrow_button" onclick="buttonNextImage()"  type="button">&rarr;</button></div></footer>`;
}

function openLargeHolidayImg(getLargeImg) {
  console.log(getLargeImg);

  let imgModal = document.getElementById("imgInModal");
  imgModal.src = getLargeImg;
  console.log(imgModal);
  dialogsRef.showModal();
  dialogsRef.classList.add("opend");
}

function closeLargeHolidayImg() {
  dialogsRef.close();
}

/* unction getNextImg() {
  for (let index = 0; index < holidayImgList.length; index++) {
           =    [index];
    
  }

 function returnNextImg () {
    
     return 

 }




}

 */
function buttonNextImage() {
  closeLargeHolidayImg();
}
