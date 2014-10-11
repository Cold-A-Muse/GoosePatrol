GoosePatrol.Preloader = function(game) {
    this.preloadBar = null;
    this.ready = false;
};

GoosePatrol.Preloader.prototype = {

    preload: function() {
        this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloadBar');
        this.preloadBar.anchor.setTo(0.5, 0.5);
    },

    create: function() {
        this.preloadBar.cropEnabled = false;
    },

    update: function() {
        this.ready = true;
    }
};