GoosePatrol.Game = function (game) {
    this.amtOfGoose;
    this.gooseGroup;
};

GoosePatrol.Game.prototype = {

    //Initializes all game variables and sprites
    create: function() {
        this.amtOfGoose = 10;
        this.buildWorld();
    },

    buildWorld: function() {
        this.add.image(0, 0, 'sky');
        this.add.image(0, 0, 'scenery');
        this.createGoose();
    },


    //Creates a goose and adds it to the gooseGroup
    createGoose: function() {
        this.gooseGroup = this.add.group();
        this.gooseGroup.enableBody = true;

        for(var i = 0; i < (this.amtOfGoose/2); i++){
            var gLeft = this.gooseGroup.create(this.rnd.integerInRange(-500, -100), 375, 'goose');
            gLeft.body.velocity.x=200;
            var gRight = this.gooseGroup.create(this.rnd.integerInRange(900, 1400), 375, 'goose');
            gRight.body.velocity.x=-200;

        }
        gLeft.anchor.setTo(0.5, 0.5);
        gRight.anchor.setTo(0.5, 0.5);
    },

    update: function() {

    }
};