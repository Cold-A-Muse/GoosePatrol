GoosePatrol.Preloader = function(game) {
    this.preloadBar = null;
    this.ready = false;
};

GoosePatrol.Preloader.prototype = {

    //Function for loading all assets
    preload: function() {
        this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar'); //Add loadbar
        this.preloadBar.anchor.setTo(0.5);
        this.load.setPreloadSprite(this.preloadBar); //Allow Phaser to use the loadbar as an actual loadbar (resize/crop)

        //Load assets
        this.load.image('goose', 'resources/goose_sprite.png');
        this.load.image('titlescreen', 'resources/titlescreen.png');
        this.load.image('sky', 'resources/sky.png');
        this.load.image('scenery', 'resources/scenery.png');
    },

    create: function() {
        this.preloadBar.cropEnabled = false;
    },

    update: function() {
        this.ready = true;
        this.state.start('StartMenu');
    }
};