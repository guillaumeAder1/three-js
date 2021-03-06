import * as THREE from 'three'

class Wire {
    constructor(scene, cubeCamera) {
        this.startVertices = new Array();

        // crystal
        // this.icoGeometry = new THREE.IcosahedronGeometry(1.5, 3);
        // this.icoMaterial = new THREE.MeshPhongMaterial({
        //     color: "#fff", shininess: 1, shading: THREE.FlatShading,
        //     envMap: cubeCamera.renderTarget.texture, reflectivity: 0.1, combine: THREE.MixOperation
        // });
        // this.mesh = new THREE.Mesh(this.icoGeometry, this.icoMaterial);
        // scene.add(this.mesh);




        this.wireMaterial = new THREE.MeshPhongMaterial({
            color: "#fff",
            shading: THREE.FlatShading,
            wireframe: true
        });
        // this.wireMaterial = false

        this.wireGeometry = new THREE.IcosahedronGeometry(1.8, 1);
        this.wireMesh = new THREE.Mesh(this.wireGeometry, this.wireMaterial);
        scene.add(this.wireMesh);


        var map = new THREE.TextureLoader().load("./public/particle.png");
        var particleMaterial = new THREE.PointsMaterial({ map: map, color: "#fff", size: 0.04, blending: THREE.AdditiveBlending, transparent: true, opacity: 0.5, alphaTest: 0.25 });
        this.particles = new THREE.Points(this.wireGeometry, particleMaterial);
        scene.add(this.particles);

        // geometry deformation
        // for (var i = 0; i < this.wireGeometry.vertices.length; i += 1) {
        //     var scalar = 1 + Math.random() * 0.8 - 0.5;
        //     this.wireGeometry.vertices[i].multiplyScalar(scalar)
        // }
    }

    update(value = 0.0008) {
        const rotationSpeed = value

        for (var i = 0; i < this.wireGeometry.vertices.length; i += 1) {
            var scalar = 1 + Math.random() * 0.8 - 0.5;
            var bool = ((Math.random() > 0.5) ? scalar / 100000 : 1)
            console.log(scalar / 100000)

            this.wireGeometry.vertices[i].x += this.wireGeometry.vertices[i].x + scalar
            this.wireGeometry.vertices[i].y += this.wireGeometry.vertices[i].y + scalar
            this.wireGeometry.vertices[i].z += this.wireGeometry.vertices[i].z + scalar
            this.wireGeometry.verticesNeedUpdate = true

        }

        // this.mesh.rotation.x += rotationSpeed;
        // this.mesh.rotation.y += rotationSpeed;
        // this.mesh.rotation.z += rotationSpeed;

        this.wireMesh.rotation.x += rotationSpeed;
        this.wireMesh.rotation.y += rotationSpeed;
        this.wireMesh.rotation.z += rotationSpeed;

        this.particles.rotation.x += rotationSpeed;
        this.particles.rotation.y += rotationSpeed;
        this.particles.rotation.z += rotationSpeed;
    }
}

export default Wire;