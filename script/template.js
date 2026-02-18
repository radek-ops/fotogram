function dialogHtmlHeaderContend() {
    return `<header id="headline" class="dialog_Header" onclick="closeDialogOutsite(event)" >
    <h2 id="imgTitle"></h2>
    <button class="close_button" type="button" onclick="buttonCloseDialog()" tabindex="0">&times;</button>
    </header>`;
}

function dialogHtmlSectionContent() {
    return `<section  onclick="closeDialogOutsite(event)"><img id="imgModal" class="lagre_img" src="" alt="" title=""></section>`;
}

function getImages(imgListIndex) {
    return `<a href="#" class="thumbnails_WCAG" onclick="openlargeHolidayImg(this, ${[imgListIndex]})" tabindex="0">
    <img  class="thumbnails"  src="${holidayImgList[imgListIndex]}" alt="${altText[imgListIndex]}"  title="${titleText[imgListIndex]}" >
    </img>
    </a>`;
}

function dialogfooterHtmlContent() {
    return `<footer class="arrow_footer" id="dialogFooter">
    <div  id="arrowContainer" class="arrow_Container" onclick="closeDialogOutsite(event)">
        <button id="arrowLeft" class="arrow_button" onclick="clickButtonPrevious()" tabindex="0" type="button">&larr;</button>
        <button id="arrowRight" class="arrow_button" onclick="clickButtonForward()" tabindex="0" type="button">&rarr;</button>
    </div>
</footer>`;
}
