GoosePatrol.Game = function (game) {};

GoosePatrol.Game.prototype = {

    create: function() {
        this.buildWorld();
    },

    buildWorld: function() {
        this.add.image(200, 200, 'gooseSprite');
    },

    update: function() {}
};