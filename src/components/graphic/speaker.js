import { ObjectLoader } from 'three'

class Speaker {
    constructor(scene) {
        this.loader = new ObjectLoader()
        this.speaker;
        this.loader.load(
            './public/speaker.json',
            (obj) => {
                this.speaker = obj
                this.speaker.position.y = -1.5
                this.speaker.rotation.y = 2.90
                this.speaker.scale.set(1.7, 1.7, 1.7)
                scene.add(this.speaker)
            },
            (xhr) => console.log((xhr.loaded / xhr.total * 100) + '% loaded'),
            (err) => console.error('An error happened', err)

        )
    }

    update() {
        const speed = 0.002
        // this.speaker && (this.speaker.rotation.y += speed)
    }
}
export default Speaker