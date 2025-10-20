/* wichig  damit nicht ungewollt automatisch eine globale variable erstellt wird
 */
"use strict";

function init() {
  addHolidayImgList();
  addOnlickHolidayImges();
  addDialogHeaderAndCloseButton();
  addDialogSection();
  addClassImgInModal();
  addDialogFooterandArrows();
  addOnclickRight();
  addOnclickLeft();
  clickButtonForward();
  clickButtonPrevious();
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

/* holidayImages & dialogsRef sind statisch  */

let holidayImages = document.getElementById("holidayImages");
let dialogsRef = document.getElementById("dialogs");
let currentImg;
let currentImgIndex;

function addHolidayImgList() {
  for (let index = 0; index < holidayImgList.length; index++) {
    holidayImages.innerHTML += getImges(index);
  }
}

function getImges(ImgListIndex) {
  return `<img  class="thumbnails" src="${holidayImgList[ImgListIndex]}" alt="${altTextArray[ImgListIndex]}"></img>`;
}

function addOnlickHolidayImges() {
  let ImgList = document.querySelectorAll(".thumbnails");

  for (let index = 0; index < ImgList.length; index++) {
    /* mit [index]  wird ein Attribut jedem einzelnen Element zugewiesen */
    ImgList[index].setAttribute(
      "onclick",
      "openLargeHolidayImg(this, " + index + ")"
    );
  }
}

function addDialogHeaderAndCloseButton() {
  dialogsRef.innerHTML += `<header id="headline" class="dialog_Header"><h2 id="imgTitle"></h2>
    <button class="close_button" type="button" onclick="closeLargeHolidayImg()">&times;</button></header`;
}

function addDialogSection() {
  dialogsRef.innerHTML += `<section><img id="imgModal" src="" alt=""> </section>`;
}

/* variable imgModal die  in function addDialogSection() dynamiasch erstellt wurde
 darf nicht global sein,  sonst wird diese mit null wert Initialisiert  */
function addClassImgInModal() {
  let imgModal = document.getElementById("imgModal");
  imgModal.classList.add("lagre_img");
}

function addDialogFooterandArrows() {
  dialogsRef.innerHTML += `<footer id="dialogFooter">
    <div id="arrowContainer" class="arrow_Container"><button id="arrowLeft"  class="arrow_button" type="button">&larr;</button>
    <button id="arrowRight" class="arrow_button"  type="button">&rarr;</button></div></footer>`;
}

function addOnclickRight() {
  let ImgList = document.getElementById("arrowRight");
  ImgList.setAttribute("onclick", "clickButtonForward()");
}

function addOnclickLeft() {
  let ImgList = document.getElementById("arrowLeft");
  ImgList.setAttribute("onclick", "clickButtonPrevious()");
}

function openLargeHolidayImg(img, imgIndex) {
  let imgModal = document.getElementById("imgModal");
  /* kein innerHTML weil hier direkt das img manipuliert wird  */
  imgModal.src = img.src;
  imgModal.alt = img.alt;

  currentImg = img;
  currentImgIndex = imgIndex;
  console.log(currentImg);

  dialogsRef.showModal();
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
  }
}

function clickButtonPrevious() {
  /*  wegen der Dekrementierung, kann also nicht >= sein  */
  if (currentImgIndex > 0) {
    currentImgIndex--;
    let imgModal = document.getElementById("imgModal");
    imgModal.src = holidayImgList[currentImgIndex];
    dialogsRef.showModal();
  }
}
