/**
 * Created by Helsloot-PC on 5-10-2014.
 */
var bmd, mouseSprite;

/**
 * A Sample Plugin demonstrating how to hook into the Phaser plugin system.
 */
Phaser.Plugin.MouseSprite = function (game, parent) {

    Phaser.Plugin.call(this, game, parent);
    document.getElementById(game.parent).style.cursor = 'none';
    game.input.mouse.mouseMoveCallback = this.updateLocation;
    game.input.mouse.callbackContext = this;

};

//	Extends the Phaser.Plugin template, setting up values we need
Phaser.Plugin.MouseSprite.prototype = Object.create(Phaser.Plugin.prototype);
Phaser.Plugin.MouseSprite.prototype.constructor = Phaser.Plugin.MouseSprite;


Phaser.Plugin.MouseSprite.prototype.addSprite = function(sprite) {
    this.sprite = sprite;
    this.sprite.anchor.setTo(0.5, 0.5);
    debugger;
}

/**
 * This is run when the plugins update during the core game loop.
 */
Phaser.Plugin.MouseSprite.prototype.updateLocation = function() {
    this.sprite.x = game.input.x;
    this.sprite.y = game.input.y;
}


var game = new Phaser.Game(640,480, Phaser.AUTO, 'phaser-demo', {create: create, update: update});

function create() {
    var bmd = game.add.bitmapData(32,32);
    bmd.ctx.beginPath();
    // create circle
    bmd.ctx.arc(16, 16, 15, 0, 2 * Math.PI, false);
    bmd.ctx.strokeStyle = 'white';
    bmd.ctx.lineWidth = 2;
    bmd.ctx.moveTo(16,8);
    bmd.ctx.lineTo(16,24);
    bmd.ctx.moveTo(8,16);
    bmd.ctx.lineTo(24,16);
    bmd.ctx.stroke();
    bmd.render();


    var sprite = game.add.sprite(0,0,bmd);
    var mouseSprite = game.plugins.add(Phaser.Plugin.MouseSprite);
    mouseSprite.addSprite(sprite);
}

function update() {
}

