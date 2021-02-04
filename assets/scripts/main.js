
let scene = new Phaser.Scene("Game");

scene.preload = function() {
    this.load.image('bg', 'assets/sprites/background.jpg');
    this.load.image('card', 'assets/sprites/card.png');
};

scene.create = function() {
    this.add.sprite(0, 0, 'bg').setOrigin(0,0);
    let positions = this.getCardPositions();

    for(let position of positions){
        this.add.sprite(position.x, position.y, 'card').setOrigin(0,0).setScale(0.7);
    }
};

scene.getCardPositions = function(){
    let positions = [];
    let cardTexture = this.textures.get('card').getSourceImage();
    let cardWidth = cardTexture.width * 0.7 + 20;
    let cardHeight = cardTexture.height * 0.7 + 20;
    let offsetX = (config.width - config.cols * cardWidth) /2;
    let offsetY = (config.height -  config.rows * cardHeight) /2;
    for(let row = 0; row < config.rows; row++){
        for(let col = 0; col < config.cols; col++){
            positions.push({
                x: offsetX + col * cardWidth,
                y: offsetY + row * cardHeight
            })
        }
    }
    return positions;
};

let config = {
    type: Phaser.AUTO,  // webgl or canvas
    width: 1280,
    height: 720,
    rows: 2,
    cols: 5,
    scene: scene
};

let game = new Phaser.Game(config);