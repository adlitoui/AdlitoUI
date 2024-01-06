/*
 * AdlitoUI Presentation Script
 * Copyright (c) [2023], Adlito. All rights reserved.
 *
 * This script powers the presentation functionality of AdlitoUI.
 * You may not modify, distribute, or reproduce this script without
 * explicit permission from Adlito.
 *
 * For inquiries, please contact [adlitoweb@gmail.com].
 */

let currentPageIndex = 1;

function showPage(index) {
    const adbifpages = document.querySelectorAll('.iframe-presentation > .IFpage');
    adbifpages.forEach(page => page.hidden = true);
    adbifpages[index].hidden = false;

    // Update page numbers
    const currentPageElement = document.getElementById('current-page');
    currentPageElement.textContent = index + 1;

    const totalPageElement = document.getElementById('total-pages');
    totalPageElement.textContent = adbifpages.length;
}

function showNextPage() {
    const adiftotalPages = document.querySelectorAll('.iframe-presentation > .IFpage').length;
    currentPageIndex = (currentPageIndex % adiftotalPages) + 1;
    showPage(currentPageIndex - 1);
}

function showPreviousPage() {
    const adiftotalPages = document.querySelectorAll('.iframe-presentation > .IFpage').length;
    currentPageIndex = (currentPageIndex - 2 + adiftotalPages) % adiftotalPages + 1;
    showPage(currentPageIndex - 1);
}

function startAutoSlide3() {
    autoSlideInterval = setInterval(showNextPage, 3000); // Change slide every 3 seconds (adjust as needed).
}
function startAutoSlide2() {
    autoSlideInterval = setInterval(showNextPage, 2000); // Change slide every 3 seconds (adjust as needed).
}
function startAutoSlide1() {
    autoSlideInterval = setInterval(showNextPage, 2000); // Change slide every 3 seconds (adjust as needed).
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

showPage(currentPageIndex - 1);
