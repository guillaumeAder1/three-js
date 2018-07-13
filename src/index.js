import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    Color
} from 'three';
import Cube from './components/cube'


(function () {

    const scene = new Scene();
    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new WebGLRenderer();
    const cube = new Cube()
    // stock all scene element 
    let objects = [cube]


    init()
    addObjects(objects, scene)
    animate(objects, scene, camera, renderer)

    function init() {
        scene.background = new Color('#202020');
        camera.position.z = 5;
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
    }

    /**
     * 
     * @param {elements} elements - Array of Three element to add to the scene
     * @param {scene} scene - Three scene 
     */
    function addObjects(elements, scene) {
        elements.forEach(e => scene.add(e.getElement()))
    }

    /**
     * refresh loop
     */
    function animate() {
        requestAnimationFrame(animate);
        objects.forEach(e => e.update())
        renderer.render(scene, camera);
    };
})();


// https://medium.com/@soffritti.pierfrancesco/how-to-organize-the-structure-of-a-three-js-project-77649f58fa3f

// https://rawgit.com/PierfrancescoSoffritti/Doodling/master/6.%20NeonCrystal/index.html