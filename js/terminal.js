/* global $, console */
/* jshint browser: true */

var writing = document.getElementById("writing");
var letters = writing.children;
var firstCursor = document.getElementById("first-cursor");
var contactInfo = document.getElementById("contact-info");
var last = document.getElementById("last");
var i = 0;

function printLetters() {
    setTimeout(function () {
        if(i != letters.length)
        letters[i].style.display = "inline";
        i++;
        if (i < letters.length) {
            printLetters();
        } else if (i === letters.length) {
            setTimeout(function () {
                firstCursor.style.display = "none";
                contactInfo.style.display = "block";
                last.style.display = "block";
            }, 1500);
        }
    }, 50);
}

printLetters()