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
            var gLeft = this.Goose.spawn(this.rnd.integerInRange(900, 1400), 375, 200);
            var gRight = this.gooseGroup.create(this.rnd.integerInRange(900, 1400), 375, 'goose');
            gRight.body.velocity.x=-200;
        }
        gLeft.anchor.setTo(0.5, 0.5);
        gRight.anchor.setTo(0.5, 0.5);
    },

    update: function() {

    }
};
//fuckkk

GoosePatrol.Goose = {
    spawn: function(x, y, velocity) {
        var goose = this.gooseGroup.create(x,y,'goose');
        goose.inputEnabled = true;
        //birdy.animations.add('fly', [0,1], 20, true);
        //birdy.animations.play('fly');
        goose.body.velocity.x = velocity;
        return goose;
        //this.player.body.collideWorldBounds = true;
    },
    clickBird: function(bird) {
        bird.body.velocity.y = 200;
        bird.body.velocity.x = 0;
        alert('You hit the bird!')
    },
    removeBird: function(bird) {
        bird.kill()
    }
};