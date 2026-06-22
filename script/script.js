/**
 * @file script.js
 * @description Hauptsteuerungslogik für das Fotogram-Fotoalbum.
 * Rendert die Bildergalerie, steuert den Lightbox-Dialog und
 * ermöglicht Navigation zwischen vergrößerten Bildern.
 * @author Radek Gnych
 */

/** @type {HTMLElement|null} Container-Element für die Thumbnail-Galerie. */
let holidayImages = document.getElementById("holidayImages");

/** @type {HTMLElement|null} Referenz auf das <dialog>-Element für die Lightbox. */
let dialogsRef = document.getElementById("dialogs");
dialogsRef.innerHTML = fullDialogHtml();

/** @type {HTMLImageElement|null} Das aktuell im Dialog angezeigte Bild-Element. */
let currentImg;

/** @type {number} Index des aktuell im Dialog angezeigten Bildes im `imgObjList`-Array. */
let currentImgIndex;

/** @type {Array<Object>} Lokale Kopie aller Bilddaten aus `holidayData`. */
let imgObjList = [];

/**
 * Initialisierungsfunktion, wird beim `onload` des Body aufgerufen.
 * Baut die Thumbnail-Galerie auf der Hauptseite auf.
 * @function init
 * @returns {void}
 */
function init() {
    addHolidayImgList();
}

/**
 * Baut den vollständigen Inhalt des Lightbox-Dialogs aus Header, Section und Footer zusammen.
 * @function fullDialogHtml
 * @returns {string} HTML-String des kompletten Dialog-Inhalts.
 */
function fullDialogHtml() {
    return dialogHtmlHeaderContendTpl() + dialogHtmlSectionContentTpl() + dialogfooterHtmlContentTpl();
}

/**
 * Iteriert über `holidayData`, befüllt `imgObjList` und rendert Thumbnails in den Container.
 * @function addHolidayImgList
 * @returns {void}
 */
function addHolidayImgList() {
    for (let index = 0; index < holidayData.length; index++) {
        imgObjList.push(holidayData[index]);
        holidayImages.innerHTML += getImagesTpl(imgObjList[index], index);
    }
}

/**
 * Öffnet den Lightbox-Dialog mit dem angeklickten Bild in Großansicht.
 * @function openlargeHolidayImg
 * @param {HTMLAnchorElement} anchorContent - Das angeklickte `<a>`-Element, das das Thumbnail umschließt.
 * @param {number} imgIndex - Index des Bildes im `imgObjList`-Array.
 * @returns {void}
 */
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

/**
 * Navigiert zum nächsten Bild im Dialog (Vorwärts-Button).
 * Springt nach dem letzten Bild wieder zum ersten zurück.
 * @function clickButtonForward
 * @returns {void}
 */
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

/**
 * Navigiert zum vorherigen Bild im Dialog (Rückwärts-Button).
 * Springt vor dem ersten Bild zum letzten zurück.
 * @function clickButtonPrevious
 * @returns {void}
 */
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

/**
 * Aktualisiert die Überschrift im Dialog mit dem Titel des aktuellen Bildes.
 * @function dialogHeadLine
 * @returns {void}
 */
function dialogHeadLine() {
    let headline = document.getElementById('imgTitle');
    headline.innerHTML = imgObjList[currentImgIndex].title;
}

/**
 * Schließt den Lightbox-Dialog.
 * @function buttonCloseDialog
 * @returns {void}
 */
function buttonCloseDialog() {
    dialogsRef.close();
}

/**
 * Verhindert das Schließen des Dialogs durch Klicks auf die inneren Dialog-Elemente
 * (Event-Bubbling wird gestoppt).
 * @function closeDialogOutsite
 * @param {Event} event - Das auslösende Click-Event.
 * @returns {void}
 */
function closeDialogOutsite(event) {
    event.stopPropagation();
}