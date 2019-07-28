const config = {
    width: 320 * 2,
    height: 180 * 2,
    parent: "container",
    type: Phaser.AUTO,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: "arcade",
        arcade: {
            gravity: {
                y: 500
            }
        }
    }
};

var game = new Phaser.Game(config);

function preload() {
    this.load.image("pajaro", "./assets/bird.png");
}

function create() {
    this.pajaro = this.physics.add.image(80, 100, "pajaro");
    this.pajaro.setScale(2);
    // this.pajaro.flipX = true;
    this.pajaro.setOrigin(0.5);
    //Físicas
    this.pajaro.setCollideWorldBounds(true);
    this.pajaro.setBounce(0.4);
    // this.pajaro.setAcceleration(10, 0);
    this.pajaro.setVelocity(50, 0);
}

function update(time, delta) {
    // this.pajaro.angle++;
    // this.pajaro.x++;
    // this.pajaro.y++;
}