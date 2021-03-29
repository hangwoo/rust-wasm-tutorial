import { Universe } from "wasm-tutorial";

const universe = Universe.new();
const pre = document.getElementById('game-of-life-canvas');

const renderLoop = () => {
  pre.textContent = universe.render();
  universe.tick();

  requestAnimationFrame(renderLoop);
};

renderLoop();