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



