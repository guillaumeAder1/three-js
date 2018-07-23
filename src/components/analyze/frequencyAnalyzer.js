


class FrequencyAnalyzer {
    constructor() {
        const player = this.createAudioElement();
        this.data = this.createAnalyzer(player);

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
        this.player = player
        return this.player;
    }

    /**
     * 
     * @param {HTML5 Audio} player - audio element playing the song
     */
    createAnalyzer(player) {
        let context = new AudioContext();
        let source = context.createMediaElementSource(player);
        this.analyser = context.createAnalyser();
        this.analyser.fftSize = 64;
        source.connect(this.analyser);
        this.analyser.connect(context.destination);
        this.frequencies = new Uint8Array(this.analyser.frequencyBinCount);
        //return this.analyser.getByteFrequencyData(this.frequencies)
    }

    getFrequencies() {
        //return this.analyser.getByteFrequencyData(this.frequencies)
    }



}

export default FrequencyAnalyzer;