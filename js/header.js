function openMenu() {
    document.getElementById("popup-header-menu").style.display = "block";
    document.getElementById("body").style.position = "fixed";
}

function closeMenu() {
    document.getElementById("popup-header-menu").style.display = "none";
    document.getElementById("body").style.position = "static";
}

var elementMenu = document.getElementById("popup-header-menu-mobile");
var propertyMenu = window.getComputedStyle(elementMenu).getPropertyValue("display");
var element = document.getElementById("subheader__icons-links-search-field");
var property = window.getComputedStyle(element).getPropertyValue("display");

function openMenuMobile() {
    if (propertyMenu == "none") {
        document.getElementById("popup-header-menu-mobile").style.display = "flex";
        propertyMenu = "flex";
        document.getElementById("body").style.position = "fixed";
        document.getElementById("subheader__icons-links-search-field").style.display = "none";
        property = "none";
        document.getElementById("subheader__icons-links-search-field-input").value = "";
    } else {
        document.getElementById("popup-header-menu-mobile").style.display = "none";
        propertyMenu = "none";
        document.getElementById("body").style.position = "static";
    }
}

function openSearch() {
    if (property == "none") {
        document.getElementById("subheader__icons-links-search-field").style.display = "block";
        property = "block";
        document.getElementById("popup-header-menu-mobile").style.display = "none";
        propertyMenu = "none";
        document.getElementById("body").style.position = "static";
    } else {
        document.getElementById("subheader__icons-links-search-field").style.display = "none";
        property = "none";
        document.getElementById("subheader__icons-links-search-field-input").value = "";
    }
}

/*
document.onclick = function (e) {
    if (e.target.id != "subheader__icons-links-search-button" &&
        e.target.id != "subheader__icons-links-search-field" &&
        e.target.id != "subheader__icons-links-search-field-input" &&
        e.target.id != "subheader__icons-links-search-field-img1" &&
        e.target.id != "subheader__icons-links-search-field-img2") {
        document.getElementById("subheader__icons-links-search-field").style.display = "none";
        property = "none";
        document.getElementById("subheader__icons-links-search-field-input").value = "";
    }
}

document.onscroll = function () {
    if (window.pageYOffset > 210) {
        document.getElementById("subheader__icons-links-search-field").style.display = "none";
        property = "none";
        document.getElementById("subheader__icons-links-search-field-input").value = "";
    }
}
*/