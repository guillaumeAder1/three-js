


class FrequencyAnalyzer {
    constructor() {
        this.player = this.createAudioElement();
        this.data = this.createAnalyzer(this.player);
        this.isPlaying = true
        this.addPauseEvent()

    }
    /** 
   * @param {*String} source - path/to/source/file
   */
    createAudioElement(source = './public/audio/combo.wav') {
        let player = document.createElement('audio');
        player.classList.add('player-audio');
        player.src = source;
        player.loop = true;
        document.body.appendChild(player);
        player.play()
        return player;
    }

    addPauseEvent() {
        document.addEventListener('keyup', (e) => {
            if (e.keyCode !== 32) {
                return false;
            }
            if (!this.isPlaying) {
                this.player.currentTime = 100
                this.player.play();
            } else {
                this.player.pause();
            }
            this.isPlaying = !this.isPlaying;
        })
    }

    /**
     * 
     * @param {HTML5 Audio} player - audio element playing the song
     */
    createAnalyzer(player) {
        let context = new (window.AudioContext || window.webkitAudioContext)();
        let source = context.createMediaElementSource(player);
        this.analyser = context.createAnalyser();
        this.analyser.fftSize = 64;
        source.connect(this.analyser);
        this.analyser.connect(context.destination);
        this.frequencies = new Uint8Array(this.analyser.frequencyBinCount);
        //return this.analyser.getByteFrequencyData(this.frequencies)
    }

    getFrequencies() {
        if (this.isPlaying) {
            this.analyser.getByteFrequencyData(this.frequencies);
            return this.frequencies
        }
    }



}

export default FrequencyAnalyzer;