/**************************************************filter**************************************************/
function openForm1() {
    var element = document.getElementById("filter__forms-dropmenu-1");
    var property = window.getComputedStyle(element).getPropertyValue("display");
    if (property == "none") {
        document.getElementById("filter__forms-dropmenu-1").style.display = "flex";
        document.getElementById("filter__forms-checkbox-1").classList.add("is-active");
        document.getElementById("filter__forms-dropmenu-2").style.display = "none";
        document.getElementById("filter__forms-checkbox-2").classList.remove("is-active");
        document.getElementById("filter__forms-dropmenu-3").style.display = "none";
        document.getElementById("filter__forms-checkbox-3").classList.remove("is-active");
        document.getElementById("filter__forms-dropmenu-4").style.display = "none";
        document.getElementById("filter__forms-checkbox-4").classList.remove("is-active");
    } else {
        document.getElementById("filter__forms-dropmenu-1").style.display = "none";
        document.getElementById("filter__forms-checkbox-1").classList.remove("is-active");
    }
}

function form1Hide() {
    document.getElementById("filter__forms-dropmenu-1").style.display = "none";
    document.getElementById("filter__forms-checkbox-1").classList.remove("is-active");
}

function openForm2() {
    var element = document.getElementById("filter__forms-dropmenu-2");
    var property = window.getComputedStyle(element).getPropertyValue("display");
    if (property == "none") {
        document.getElementById("filter__forms-dropmenu-2").style.display = "flex";
        document.getElementById("filter__forms-checkbox-2").classList.add("is-active");
        document.getElementById("filter__forms-dropmenu-1").style.display = "none";
        document.getElementById("filter__forms-checkbox-1").classList.remove("is-active");
        document.getElementById("filter__forms-dropmenu-3").style.display = "none";
        document.getElementById("filter__forms-checkbox-3").classList.remove("is-active");
        document.getElementById("filter__forms-dropmenu-4").style.display = "none";
        document.getElementById("filter__forms-checkbox-4").classList.remove("is-active");
    } else {
        document.getElementById("filter__forms-dropmenu-2").style.display = "none";
        document.getElementById("filter__forms-checkbox-2").classList.remove("is-active");
    }
}

function form2Clean() {
    document.getElementById("filter__forms-dropmenu-2-checkbox1").checked = false;
    document.getElementById("filter__forms-dropmenu-2-checkbox2").checked = false;
    document.getElementById("filter__forms-dropmenu-2-checkbox3").checked = false;
    document.getElementById("filter__forms-dropmenu-2-checkbox4").checked = false;
    document.getElementById("filter__forms-dropmenu-2-checkbox5").checked = false;
    document.getElementById("filter__forms-dropmenu-2-checkbox6").checked = false;
    document.getElementById("filter__forms-dropmenu-2-checkbox7").checked = false;
    document.getElementById("filter__forms-dropmenu-2-checkbox8").checked = false;
    document.getElementById("filter__forms-dropmenu-2-checkbox9").checked = false;
    document.getElementById("filter__forms-dropmenu-2-checkbox10").checked = false;
    document.getElementById("filter__forms-dropmenu-2-checkbox11").checked = false;
    document.getElementById("filter__forms-dropmenu-2-checkbox12").checked = false;
    document.getElementById("filter__forms-dropmenu-2-checkbox13").checked = false;
    document.getElementById("filter__forms-dropmenu-2-checkbox14").checked = false;
}

function openForm3() {
    var element = document.getElementById("filter__forms-dropmenu-3");
    var property = window.getComputedStyle(element).getPropertyValue("display");
    if (property == "none") {
        document.getElementById("filter__forms-dropmenu-3").style.display = "flex";
        document.getElementById("filter__forms-checkbox-3").classList.add("is-active");
        document.getElementById("filter__forms-dropmenu-1").style.display = "none";
        document.getElementById("filter__forms-checkbox-1").classList.remove("is-active");
        document.getElementById("filter__forms-dropmenu-2").style.display = "none";
        document.getElementById("filter__forms-checkbox-2").classList.remove("is-active");
        document.getElementById("filter__forms-dropmenu-4").style.display = "none";
        document.getElementById("filter__forms-checkbox-4").classList.remove("is-active");
    } else {
        document.getElementById("filter__forms-dropmenu-3").style.display = "none";
        document.getElementById("filter__forms-checkbox-3").classList.remove("is-active");
    }
}

function form3Clean() {
    document.getElementById("filter__forms-dropmenu-3-checkbox1").checked = false;
    document.getElementById("filter__forms-dropmenu-3-checkbox2").checked = false;
    document.getElementById("filter__forms-dropmenu-3-checkbox3").checked = false;
    document.getElementById("filter__forms-dropmenu-3-checkbox4").checked = false;
    document.getElementById("filter__forms-dropmenu-3-checkbox5").checked = false;
    document.getElementById("filter__forms-dropmenu-3-checkbox6").checked = false;
}

function openForm4() {
    var element = document.getElementById("filter__forms-dropmenu-4");
    var property = window.getComputedStyle(element).getPropertyValue("display");
    if (property == "none") {
        document.getElementById("filter__forms-dropmenu-4").style.display = "flex";
        document.getElementById("filter__forms-checkbox-4").classList.add("is-active");
        document.getElementById("filter__forms-dropmenu-1").style.display = "none";
        document.getElementById("filter__forms-checkbox-1").classList.remove("is-active");
        document.getElementById("filter__forms-dropmenu-2").style.display = "none";
        document.getElementById("filter__forms-checkbox-2").classList.remove("is-active");
        document.getElementById("filter__forms-dropmenu-3").style.display = "none";
        document.getElementById("filter__forms-checkbox-3").classList.remove("is-active");
    } else {
        document.getElementById("filter__forms-dropmenu-4").style.display = "none";
        document.getElementById("filter__forms-checkbox-4").classList.remove("is-active");
    }
}

function form4Clean() {
    document.getElementById("filter__forms-dropmenu-4-input-field-1").value = "";
    document.getElementById("filter__forms-dropmenu-4-input-field-2").value = "";
}

function filterButton() {
    document.getElementById("filter__forms-dropmenu-1").style.display = "none";
    document.getElementById("filter__forms-checkbox-1").classList.remove("is-active");
    document.getElementById("filter__forms-dropmenu-2").style.display = "none";
    document.getElementById("filter__forms-checkbox-2").classList.remove("is-active");
    document.getElementById("filter__forms-dropmenu-3").style.display = "none";
    document.getElementById("filter__forms-checkbox-3").classList.remove("is-active");
    document.getElementById("filter__forms-dropmenu-4").style.display = "none";
    document.getElementById("filter__forms-checkbox-4").classList.remove("is-active");
}

/**************************************************slider block4**************************************************/
var cardIndex1 = 1;
var cardIndex2 = 1;
var cardIndex3 = 1;
var cardIndex4 = 1;
var cardIndex5 = 1;
var cardIndex6 = 1;

function nextSlide1() {
    cardIndex1 = slider(cardIndex1 += 1, "block4-card-slide1", "block4-card-point1");
}
function previousSlide1() {
    cardIndex1 = slider(cardIndex1 -= 1, "block4-card-slide1", "block4-card-point1");
}
function nextSlide2() {
    cardIndex2 = slider(cardIndex2 += 1, "block4-card-slide2", "block4-card-point2");
}
function previousSlide2() {
    cardIndex2 = slider(cardIndex2 -= 1, "block4-card-slide2", "block4-card-point2");
}
function nextSlide3() {
    cardIndex3 = slider(cardIndex3 += 1, "block4-card-slide3", "block4-card-point3");
}
function previousSlide3() {
    cardIndex3 = slider(cardIndex3 -= 1, "block4-card-slide3", "block4-card-point3");
}
function nextSlide4() {
    cardIndex4 = slider(cardIndex4 += 1, "block4-card-slide4", "block4-card-point4");
}
function previousSlide4() {
    cardIndex4 = slider(cardIndex4 -= 1, "block4-card-slide4", "block4-card-point4");
}
function nextSlide5() {
    cardIndex5 = slider(cardIndex5 += 1, "block4-card-slide5", "block4-card-point5");
}
function previousSlide5() {
    cardIndex5 = slider(cardIndex5 -= 1, "block4-card-slide5", "block4-card-point5");
}
function nextSlide6() {
    cardIndex6 = slider(cardIndex6 += 1, "block4-card-slide6", "block4-card-point6");
}
function previousSlide6() {
    cardIndex6 = slider(cardIndex6 -= 1, "block4-card-slide6", "block4-card-point6");
}

function slider(index, value1, value2) {
    var slides = document.getElementsByClassName(value1);
    var points = document.getElementsByClassName(value2);
    if (index > slides.length) {
        index = 1;
    }
    if (index < 1) {
        index = slides.length;
    }
    for (var slide of slides) {
        slide.style.display = "none";
    }
    for (var point of points) {
        point.style.background = "#FFFFFF";
    }
    slides[index - 1].style.display = "block";
    slides[index - 1].style.animation = "fadeInFromNone 500ms ease-in-out";
    points[index - 1].style.background = "#F395A9";
    return index;
}