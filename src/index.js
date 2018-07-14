import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    CubeCamera,
    DirectionalLight,
    SpotLight,
    Color
} from 'three';
import * as THREE from 'three'
import Cube from './components/graphic/cube'
import Wire from './components/graphic/wire'
import Speaker from './components/graphic/speaker'


(function () {

    const scene = new Scene();
    var cubeCamera = new CubeCamera(0.5, 500, 1024);
    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new WebGLRenderer();
    const light = buildLights(scene)


    //const cube = new Cube(scene, cubeCamera)
    const wire = new Wire(scene, cubeCamera)

    // speaker mesh
    const speaker = new Speaker(scene)

    // stock all scene element 
    let objects = [wire, speaker]

    window.scene = scene
    window.THREE = THREE


    init()
    animate()

    function init() {
        scene.background = new Color('#202020');
        camera.position.z = 5;
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
    }


    function buildLights(scene) {
        var light = new DirectionalLight("#fff", 0.4);
        light.position.x = -50;
        light.target.position.set(0, 0, 0)
        scene.add(light);

        var light = new DirectionalLight("#fff", 0.2);
        light.position.x = 50;
        light.position.z = 50;
        light.target.position.set(0, 0, 0)
        scene.add(light);

        var light = new SpotLight("#fff", 0.8);
        light.position.y = 100;
        light.angle = 1.05;
        light.decacy = 2;
        light.penumbra = 1;
        light.shadow.camera.near = 10;
        light.shadow.camera.far = 1000;
        light.shadow.camera.fov = 30;
        scene.add(light);

        return light;
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

// https://github.com/PierfrancescoSoffritti/Doodling