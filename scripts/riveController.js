let sad;
let eat;
let jump;
let idle;

const riveInstance = new rive.Rive({
  src: "../assets/dyr.riv",
  canvas: document.getElementById("riveCanvas"),
  autoplay: true,
  stateMachines: "controller",
  onload: () => {
    riveInstance.resizeDrawingSurfaceToCanvas();

    // Get controller state machine inputs
    let controller_inputs = riveInstance.stateMachineInputs("controller");
    console.log("controller_inputs", controller_inputs);

    sad = controller_inputs.find((item) => item.name === "sad");
    eat = controller_inputs.find((item) => item.name === "eat");
    jump = controller_inputs.find((item) => item.name === "jump");
    idle = controller_inputs.find((item) => item.name === "idle");
  },
});

export { sad, eat, jump, idle };

// const riveInstance = new rive.Rive({
//   src: "../assets/first_rive.riv",
//   canvas: document.getElementById("riveCanvas"),
//   autoplay: true,
//   stateMachines: "controller",
//   onload: () => {
//     riveInstance.resizeDrawingSurfaceToCanvas();

//     // Get controller state machine inputs
//     let controller_inputs = riveInstance.stateMachineInputs("controller");
//     console.log("controller_inputs", controller_inputs);

//     headNod = controller_inputs.find((item) => item.name === "headnod");
//     left_right = controller_inputs.find((item) => item.name === "left_right");
//   },
// });
