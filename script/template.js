/**
 * @file template.js
 * @description HTML-Template-Funktionen für das Fotogram-Fotoalbum.
 * Stellt Template-Strings für den Lightbox-Dialog und die Thumbnail-Galerie bereit.
 * @author Radek Gnych
 */

/**
 * Erzeugt den HTML-Header des Lightbox-Dialogs mit Titel und Schließen-Button.
 * Der Header enthält ein `<h2>`-Element für den Bildtitel und einen Button zum Schließen.
 * Klicks auf den Header werden durch `closeDialogOutsite(event)` am Bubbling gehindert.
 * @function dialogHtmlHeaderContendTpl
 * @returns {string} HTML-String des Dialog-Headers.
 */
function dialogHtmlHeaderContendTpl() {
    return /*html*/ `<header id="headline" class="dialog_Header" onclick="closeDialogOutsite(event)" >
    <h2 id="imgTitle"></h2>
    <button class="dialog_close_button" type="button" onclick="buttonCloseDialog()" tabindex="0">&times;</button>
    </header>`;
}

/**
 * Erzeugt den HTML-Hauptbereich (Section) des Lightbox-Dialogs mit dem vergrößerten Bild.
 * Das `<img>`-Element wird dynamisch mit `src`, `alt` und `title` befüllt.
 * @function dialogHtmlSectionContentTpl
 * @returns {string} HTML-String der Dialog-Section.
 */
function dialogHtmlSectionContentTpl() {
    return /*html*/ `<section  onclick="closeDialogOutsite(event)"><img id="imgModal" class="dialog_img" src="" alt="" title=""></section>`;
}

/**
 * Erzeugt den HTML-Template-String für ein einzelnes Thumbnail-Bild in der Galerie.
 * Das Thumbnail ist in einen `<a>`-Link verpackt, der bei Klick `openlargeHolidayImg` aufruft.
 * @function getImagesTpl
 * @param {Object} imgObjList - Ein Bildobjekt aus `holidayData` mit den Eigenschaften `src` und `alt`.
 * @param {string} imgObjList.src - Bildpfad.
 * @param {string} imgObjList.alt - Alternativtext.
 * @param {number} index - Index des Bildes, wird an `openlargeHolidayImg` übergeben.
 * @returns {string} HTML-String eines Thumbnail-Links mit Bild.
 */
function getImagesTpl(imgObjList, index) {
    return /*html*/ `<a href="#" class="thumbnails_WCAG" onclick="openlargeHolidayImg(this, ${index})" >
    <img  class="thumbnails"  src="${imgObjList.src}" alt="${imgObjList.alt}" >
        </a>`;
}

/**
 * Erzeugt den HTML-Footer des Lightbox-Dialogs mit den Navigationspfeilen.
 * Enthält einen linken Pfeil (`←`) für das vorherige Bild und einen rechten Pfeil (`→`) für das nächste Bild.
 * @function dialogfooterHtmlContentTpl
 * @returns {string} HTML-String des Dialog-Footers.
 */
function dialogfooterHtmlContentTpl() {
    return /*html*/ `<footer class="dialog_arrow_footer" id="dialogFooter">
    <div  class="dialog_arrow_container" onclick="closeDialogOutsite(event)">
        <button id="arrowLeft" class="dialog_arrow_button" onclick="clickButtonPrevious()" tabindex="0" type="button">&larr;</button>
        <button id="arrowRight" class="dialog_arrow_button" onclick="clickButtonForward()" tabindex="0" type="button">&rarr;</button>
    </div>
</footer>`;
}