function dialogHtmlHeaderContendTpl() {
    return /*html*/ `<header id="headline" class="dialog_Header" onclick="closeDialogOutsite(event)" >
    <h2 id="imgTitle"></h2>
    <button class="dialog_close_button" type="button" onclick="buttonCloseDialog()" tabindex="0">&times;</button>
    </header>`;
}

function dialogHtmlSectionContentTpl() {
    return /*html*/ `<section  onclick="closeDialogOutsite(event)"><img id="imgModal" class="dialog_img" src="" alt="" title=""></section>`;
}

function getImagesTpl(imgObjList, index) {
    return /*html*/ `<a href="#" class="thumbnails_WCAG" onclick="openlargeHolidayImg(this, ${index})" >
    <img  class="thumbnails"  src="${imgObjList.src}" alt="${imgObjList.alt}" >
        </a>`;
}

function dialogfooterHtmlContentTpl() {
    return /*html*/ `<footer class="dialog_arrow_footer" id="dialogFooter">
    <div  class="dialog_arrow_container" onclick="closeDialogOutsite(event)">
        <button id="arrowLeft" class="dialog_arrow_button" onclick="clickButtonPrevious()" tabindex="0" type="button">&larr;</button>
        <button id="arrowRight" class="dialog_arrow_button" onclick="clickButtonForward()" tabindex="0" type="button">&rarr;</button>
    </div>
</footer>`;
}
