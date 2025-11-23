//
var body = document.querySelector("body");

var img = document.querySelector(".img-div img");

var msg = document.querySelector(".msg span");

img.addEventListener("mouseenter", function () {
  msg.textContent = "Chutaki se door raho 🤬🤬🤬";
});
img.addEventListener("mouseleave", function () {
  msg.textContent = "Wapas mat ana 🤨!!!!!";
});
