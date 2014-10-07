
BasicGame.Game = function (game) {

	//	When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:

    this.game;		//	a reference to the currently running game
    this.add;		//	used to add sprites, text, groups, etc
    this.camera;	//	a reference to the game camera
    this.cache;		//	the game cache
    this.input;		//	the global input manager (you can access this.input.keyboard, this.input.mouse, as well from it)
    this.load;		//	for preloading assets
    this.math;		//	lots of useful common math operations
    this.sound;		//	the sound manager - add a sound, play one, set-up markers, etc
    this.stage;		//	the game stage
    this.time;		//	the clock
    this.tweens;    //  the tween manager
    this.state;	    //	the state manager
    this.world;		//	the game world
    this.particles;	//	the particle manager
    this.physics;	//	the physics manager
    this.rnd;		//	the repeatable random number generator

    //	You can use any of these from any function within this State.
    //	But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.

};

BasicGame.Game.prototype = {

	create: function () {
//      var birds = game.add.group(); //om straks te checken voor elke 'levende' vogel of ze binnen bounds zijn van worldscreen
        var treeHouse = this.add.sprite(game.worldX/2, game.worldY/2,'treeHouse');
        this.physics.arcade.enableBody(treeHouse);
        treeHouse.body.collideWorldBounds = true;

        var exampleBird = this.bird.spawnBird(10, 200, 200);
        exampleBird.events.onInputDown.add(exampleBird.clickBird, this);
		//	Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!

	},

	update: function () {
//         for(var i = 0; i < birds.length; i++) {
//            if(birds.getAt(i).body.x >= game.world.length || birds.getAt(i).body.y > game.world.height) {
//                var deletedBird = birds.getAt(i);// pakt de bird instance
//                deletedBird.removeBird(this);// killt de bird instance
//            }
//        }
		//	Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!

	},

	quitGame: function (pointer) {

		//	Here you should destroy anything you no longer need.
		//	Stop music, delete sprites, purge caches, free resources, all that good stuff.

		//	Then let's go back to the main menu.
		this.state.start('MainMenu');

	}

};

BasicGame.bird = {
    spawnBird: function(x, y, velocity) {

        var birdy = this.add.sprite(x,y,'player');
        birdy.inputEnabled = true;
        birdy.animations.add('fly', [0,1], 20, true);
        birdy.animations.play('fly');
        this.physics.arcade.enableBody(birdy);
        birdy.body.velocity.x = velocity;
        return birdy;
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
