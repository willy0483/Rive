import { eat, jump, sad, idle } from "./riveController.js";

let myButton = document.getElementById("myButton");
let myButtonOne = document.getElementById("myButtonOne");
let myButtonTwo = document.getElementById("myButtonTwo");
let myButtonThree = document.getElementById("myButtonThree");

const playAnimation = () => {
  eat.fire();
};

myButton.addEventListener("click", () => {
  playAnimation();
});

const playAnimationOne = () => {
  jump.fire();
};

myButtonOne.addEventListener("click", () => {
  playAnimationOne();
});

const playAnimationTwo = () => {
  sad.value = true;
};

myButtonTwo.addEventListener("click", () => {
  playAnimationTwo();
});

const playAnimationThree = () => {
  idle.fire();
  sad.value = false;
};

myButtonThree.addEventListener("click", () => {
  playAnimationThree();
});
