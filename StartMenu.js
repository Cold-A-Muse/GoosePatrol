GoosePatrol.StartMenu = function(game){
    this.startBG;
}

GoosePatrol.StartMenu.prototype = {

    //Create titlescreen
    create: function(){
        startBG = this.add.image(0, 0, 'titlescreen');
        startBG.inputEnabled = true;
        startBG.events.onInputDown.addOnce(this.startGame, this);
    },

    //Start the game onclick
    startGame: function (pointer) {
        this.state.start('Game');
    }
}