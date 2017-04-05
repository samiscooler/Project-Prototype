function playerSprite(x, y) {
    this.x = x;
    this.y = y;
    this.w = 30;
    this.h = 50;
    this.xv = 0;
    this.yv = 0;
    this.speed = 2;
    this.colour = "blue";
    this.onGround = false;
    this.jumpForce = 4;
    this.jumpTimer = 0;
    this.maxJump = 7;
    this.controls = function() {
        for (i in gameData.keys) {
            if (gameData.keys[i] == null || gameData.keys[i] == undefined || gameData.keys[i] == false) {
                continue;
            }
            switch (i.toString()) {
                case "87":
                case "38":

                    if (this.onGround && this.jumpTimer == 0) {
                        this.yv -= this.jumpForce * 4;
                        this.jumpTimer++;
                    }

                    if (this.jumpTimer < this.maxJump && this.jumpTimer != 0) {
                        this.yv -= this.jumpForce;
                        this.jumpTimer++;
                    }
                    break;
                case "65":
                case "37":
                    this.xv -= this.speed;
                    break;
                case "68":
                case "39":
                    this.xv += this.speed;
                    break;
            }
        }
    }

    this.levelCollision = function(level) {
        var size = [50, 50];
        this.onGround = false;
        for (var row in level.currentLevel) {
            for (var tile in level.currentLevel) {
                if (level.currentLevel[row][tile] != 0 && level.currentLevel[row][tile] != "p") {
                    var col = colCheck(this, {
                        x: tile * 50,
                        y: row * 50,
                        w: size[0],
                        h: size[1]
                    }, true)
                    if (col == "b") {
                        this.onGround = true;
                        this.yv = 0;
                        this.jumpTimer = 0;
                    };
                    if (col == "t") {
                        this.yv = 0;
                        this.jumpTimer = this.maxJump;
                    };
                }

            }
        }
    }

    this.update = function() {
        this.controls();
        this.xv *= gameData.air;
        this.yv *= gameData.air;

        this.x += this.xv;
        this.y += this.yv;

        if (!this.onGround) {
            this.yv += gameData.gravity;
        }

        this.levelCollision(levelManager);

    }

    this.render = function() {
        ctx.fillStyle = this.colour;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }

}
