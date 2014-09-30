var game = new Phaser.Game(600,600,Phaser.AUTO,'',{preload:preload,create:create,update:update});

function preload(){

    //Load an 'asset', our logo, into the game
    game.load.image('gpLogo','assets/logo_static_small.png');
}

function create(){

    //Enables the use of the Arcade Physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //Creates our logo at the top left corner
    game.add.sprite(0,0,gpLogo);
}

function update(){

}