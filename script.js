"use strict";
const keyboardBtn = document.querySelectorAll(".btn__keys");
const song_btn = document.querySelector(".btn__song");

const clickHandler = function () {
  keyboardBtn.forEach((b, i) => {
    b.addEventListener("click", function (e) {
      const audio = document.querySelector(`.audio-${i + 1}`);
      if (audio.paused) audio.play();
      else audio.pause();
      e.preventDefault();
      b.classList.remove("btn_keys");
      b.classList.add("btn__keys__deactive");
      setTimeout(function () {
        b.classList.remove("btn__keys__deactive");
        b.classList.add("btn_keys");
      }, 250);
      setTimeout(function () {
        audio.pause();
      }, 30000);
    });
  });
};
const keyboardHandler = function () {
  window.addEventListener("keydown", function (e) {
    if (e.key >= 1 && e.key <= 7) {
      const audio = this.document.querySelector(`.audio-${e.key}`);
      if (audio.paused) audio.play();
      else audio.pause();
      const selectedbtn = document.querySelector(`.btn__keys__${e.key}`);
      selectedbtn.classList.remove("btn_keys");
      selectedbtn.classList.add("btn__keys__deactive");
      setTimeout(function () {
        selectedbtn.classList.remove("btn__keys__deactive");
        selectedbtn.classList.add("btn_keys");
      }, 200);
      this.setTimeout(function () {
        audio.pause();
      }, 30000);
    }
  });
};
const init = function () {
  clickHandler();
  keyboardHandler();
};
init();
