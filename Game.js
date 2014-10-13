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
            var gLeft = this.spawnGoose(this.rnd.integerInRange(-500, -100), 450, 200);
            var gRight = this.spawnGoose(this.rnd.integerInRange(900, 1400), 450, -200);
        }
    },

    spawnGoose: function(x, y, velocity) {
        var goose = this.gooseGroup.create(x, y, 'goose');
        goose.anchor.setTo(0.5);
        goose.inputEnabled = true;
        goose.body.velocity.x = velocity;
        goose.events.onInputDown.add(this.killGoose(), this)

        //goose.animations.add('fly', [0,1], 20, true);
        //goose.animations.play('fly');
        //this.player.body.collideWorldBounds = true;
    },

    killGoose: function(goose, pointer){
        goose.kill();
    },

    update: function() {

    }
};

/*

GoosePatrol.Goose = {
    spawn: function(x, y, velocity) {
        var goose = this.gooseGroup.create(x, y, 'goose');
        goose.anchor.setTo(0.5);
        goose.inputEnabled = true;
        goose.body.velocity.x = velocity;

        //goose.animations.add('fly', [0,1], 20, true);
        //goose.animations.play('fly');
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

*/