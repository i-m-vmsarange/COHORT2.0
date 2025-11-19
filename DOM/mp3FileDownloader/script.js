//
var btn = document.querySelector(".btn");
var percentVal = document.querySelector(".percent");
var inner = document.querySelector(".inner");
percentVal.innerHTML = "0 %";
let grow = 0;
btn.addEventListener("click", function () {
  btn.style.pointerEvents = "none";
  var int = setInterval(() => {
    grow++;
    percentVal.innerHTML = grow + " %";
    inner.style.width = grow + "%";
  }, 100);
  setTimeout(() => {
    clearInterval(int);
    btn.innerHTML = "Downloaded";
    btn.style.opacity = 0.7;
  }, 10000);
});
