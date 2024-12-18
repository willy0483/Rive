let headNod;
let left_right;

const riveInstance = new rive.Rive({
  src: "../assets/first_rive.riv",
  canvas: document.getElementById("riveCanvas"),
  autoplay: true,
  stateMachines: "controller",
  onload: () => {
    riveInstance.resizeDrawingSurfaceToCanvas();

    // Get controller state machine inputs
    let controller_inputs = riveInstance.stateMachineInputs("controller");
    console.log("controller_inputs", controller_inputs);

    headNod = controller_inputs.find((item) => item.name === "headnod");
    left_right = controller_inputs.find((item) => item.name === "left_right");
  },
});

export { headNod, left_right };
