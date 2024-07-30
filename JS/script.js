//Banner autoslide
var slideindex = 1;
showDivs(slideindex);

function plusDivs(n) {
    showDivs(slideindex += n);
}

function showDivs(n) {
    var i;
    var imgList = document.getElementsByClassName("main-content-banner");
    if (n > imgList.length) {slideindex = 1}
    else if (n < 1) slideindex = imgList.length;

    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
    }
    imgList[slideindex - 1].style.display = "block";
}

setInterval(() => {
    plusDivs(1);
}, 1000)