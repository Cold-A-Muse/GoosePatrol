GoosePatrol.Game = function (game) {
    this.amtOfGoose;
    this.amtOfCurrGoose;
    this.amtOfGooseSpawned;
    this.gooseGroup;
    this.t;
    this.score;
};

GoosePatrol.Game.prototype = {
    //Initializes all game variables and sprites
    create: function() {
        this.amtOfGoose = 100;
        this.amtOfCurrGoose = 0;
        this.amtOfGooseSpawned = 0;
        this.buildWorld();

        this.score = 0;
        var style = {font: "20px Arial", fill: "#000000"};
        this.t = this.add.text(10, 10, "Score: " + this.score , style);
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

        for(var i = 0; i < (this.amtOfGoose); i++){
            if(this.amtOfCurrGoose <= 10) {
                this.amtOfGooseSpawned++;
                var r = this.rnd.integerInRange(1, 2);

                if (r == 1)
                    var g = this.spawnGoose(this.rnd.integerInRange(-500, -100), this.rnd.integerInRange(100, 150), 200);
                else if (r == 2)
                    var g = this.spawnGoose(this.rnd.integerInRange(900, 1400), this.rnd.integerInRange(100, 150), -200);
            }
        }
    },

    spawnGoose: function(x, y, velocity) {
        var goose = this.gooseGroup.create(x, y, 'goose');
        goose.anchor.setTo(0.5);
        goose.enableBody = true;
        goose.inputEnabled = true;
        goose.body.velocity.x = velocity;
        goose.events.onInputDown.add(this.killGoose, this);
        this.amtOfCurrGoose++;
        //goose.animations.add('fly', [0,1], 20, true);
        //goose.animations.play('fly');
        //this.player.body.collideWorldBounds = true;
    },

    killGoose: function(goose, pointer){
        goose.kill();
        this.addScore();
        this.amtOfCurrGoose--;
    },

    addScore: function(){
        this.score++;
        this.t.setText("Score: " + this.score);
    },

    update: function() {
        for(var i = 0; i < (this.amtOfGoose); i++){
            if(this.amtOfCurrGoose <= 10) {
                this.amtOfGooseSpawned++;
                var r = this.rnd.integerInRange(1, 2);

                if (r == 1)
                    var g = this.spawnGoose(this.rnd.integerInRange(-500, -100), this.rnd.integerInRange(100, 150), 200);
                else if (r == 2)
                    var g = this.spawnGoose(this.rnd.integerInRange(900, 1400), this.rnd.integerInRange(100, 150), -200);
            }
        }
    }
};