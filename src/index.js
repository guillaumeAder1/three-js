import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    BoxGeometry,
    MeshBasicMaterial,
    Mesh
} from 'three';

const scene = new Scene();
var camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new WebGLRenderer();


var geometry = new BoxGeometry(1, 1, 1);
var material = new MeshBasicMaterial({ color: 0xff00ff });
var cube = new Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

(function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}());

// /https://medium.com/@soffritti.pierfrancesco/how-to-organize-the-structure-of-a-three-js-project-77649f58fa3f