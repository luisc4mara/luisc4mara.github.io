import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  LineBasicMaterial,
  EdgesGeometry,
  LineSegments,
} from "three";

export default function PortfolioAnimation() {
  const div = document.querySelector("#animation");

  const scene = new Scene();
  const camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new WebGLRenderer();
  renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
  renderer.setClearColor(0xffffff, 0);
  div.appendChild(renderer.domElement);

  const geometry = new BoxGeometry(1, 1, 1);
  const material = new MeshBasicMaterial({ color: "#f2e7bf" });
  const cube = new Mesh(geometry, material);

  scene.add(cube);

  // Wireframe
  const geo = new EdgesGeometry(cube.geometry);
  const mat = new LineBasicMaterial({ color: 0x000000 });
  const wireframe = new LineSegments(geo, mat);
  cube.add(wireframe);

  camera.position.z = 1.5;

  function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  }

  animate();
}