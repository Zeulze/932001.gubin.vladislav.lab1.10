"use strict";

//WALL SLIDING HANDLER

const curtain = document.querySelector(".curtains");

function wallHandler(e) {
  let target = e.target;
  if (target.classList.contains("curtains")) {
    target.classList.remove("curtains");
    target.classList.add("curtains-sliding");
  }
}

curtain.addEventListener("click", wallHandler);

if (curtain.classList.contains("curtains-sliding")) {
  curtain.removeEventListener("click", wallHandler);
}

//LIGHT HANDLER

function togglerHangler(toggleNameFirst, toggleNameSecond, ...name) {
  name.forEach((item) => {
    item.classList.toggle(toggleNameFirst);
    item.classList.toggle(toggleNameSecond);
  });
}

const lamp = document.querySelector(".lamp"),
  light = document.querySelector("#light"),
  wizard = document.querySelector(".wizard"),
  hat = document.querySelector(".hat"),
  rabbit = document.querySelector(".rabbit"),
  pigeon = document.querySelector(".pigeon");

lamp.addEventListener("click", () => {
  togglerHangler("light-on", "light-off", light, hat, rabbit, pigeon);
  togglerHangler("to-invisible", "toVisible", wizard);
});

//MAIN "FOCUS" HANDLER

function switcher(target) {
  if (target.classList.contains("to-runUp")) {
    target.classList.remove("to-runUp");
    target.classList.add("to-runDown");
  } else {
    target.classList.add("to-runUp");
    target.classList.remove("to-runDown");
  }
}

function switchOnTimeoutHandler(objFirst, objSecond) {
  setTimeout(() => {
    objFirst.style.display = "none";
    objFirst.style.top = "500px";
    objSecond.style.display = "inline-block";
    objSecond.classList.toggle("to-runUp");
    objSecond.classList.toggle("to-runDown");
    objSecond.style.top = "450px";
  }, 250);
}

rabbit.addEventListener("click", () => {
  switcher(rabbit);
  switchOnTimeoutHandler(rabbit, pigeon);
});

pigeon.addEventListener("click", () => {
  switcher(pigeon);
  switchOnTimeoutHandler(pigeon, rabbit);
});
