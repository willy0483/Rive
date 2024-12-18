import { headNod } from "./riveController.js";

let myButton = document.getElementById("myButton");

const playAnimation = () => {
  headNod.fire();
};

myButton.addEventListener("click", () => {
  playAnimation();
});
