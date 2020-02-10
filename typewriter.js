"use strict";
window.addEventListener("DOMContentLoaded", init);

function init() {
  let str = document.querySelector(".typewritten").textContent;
  const strCopy = str;
  //console.log(strCopy);
  const strNum = str.length;
  // console.log(strNum);
  let count = 0;
  loop();

  function loop() {
    setTimeout(function() {
      str = strCopy.substr(0, count + 1);
      // console.log(count);
      document.querySelector(".typewritten").textContent = str;
      count++;
      if (count < strNum) {
        loop();
      }
    }, 100);
  }
}
