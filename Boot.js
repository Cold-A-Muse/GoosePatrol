var GoosePatrol = {};

GoosePatrol.Boot = function (game) {};

GoosePatrol.Boot.prototype = {
    preload: function() {
        this.load.image('preloadBar', 'resources/loadbar.gif')
    },

    create: function() {
        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = false;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.minWidth = 800;
        this.scale.minHeight = 600;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.stage.forcePortrait = true;
        this.scale.setScreenSize(true);

        this.input.addPointer();
        this.stage.backgroundColor = '#000000';

        this.state.start('Preloader');
    }
};
