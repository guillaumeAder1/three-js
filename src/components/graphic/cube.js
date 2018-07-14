import {
    BoxGeometry,
    MeshBasicMaterial,
    MeshPhongMaterial,
    PointsMaterial,
    AdditiveBlending,
    Mesh
} from 'three';



class Cube {
    constructor(scene, cubeCamera) {
        this.geometry = new BoxGeometry(1, 1, 1);
        this.material = new MeshPhongMaterial({ color: '#aaa', wireframe: true });
        //this.material = new PointsMaterial({ color: "#fff", size: 0.04, blending: AdditiveBlending, transparent: true, opacity: 0.5, alphaTest: 0.25 });
        this.cube = new Mesh(this.geometry, this.material);

        scene.add(this.cube)
    }

    /**
     * animation to be render in the refresh loop
     */
    update() {
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;
    }

}

export default Cube;