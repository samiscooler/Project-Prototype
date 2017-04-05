function levelLoaderClass() {
    this.currentLevel = [];
    this.currentLevelID = null;
    this.loadLevel = function(id) {
        var loc = [0, 0];
        var diff = 50;
        var size = [50, 50];
        this.currentLevel = JSON.parse(JSON.stringify(levels[id]));
        this.currentLevelID = id;

        for (var row in this.currentLevel) {
            for (var tile in this.currentLevel) {
                switch (this.currentLevel[row][tile]) {
                    case "p":
                        player.x = tile * diff;
                        player.y = row * diff;
                        break;
                }
                loc[0] += diff;
            }
            loc[0] = 0;
            loc[1] += diff;
        }
    };
    this.keyboard = function() {
        for (i in gameData.keys) {
            if (gameData.keys[i] == null || gameData.keys[i] == undefined || gameData.keys[i] == false) {
                continue;
            }
            switch (i.toString()) {
                case "82":
                    this.loadLevel(this.currentLevelID);
                    break;
            }
        }
    }
    this.renderCurrentLevel = function() {
        var loc = [0, 0];
        var diff = 50;
        var size = [50, 50];

        for (var row in this.currentLevel) {
            for (var tile in this.currentLevel[row]) {
                switch (this.currentLevel[row][tile]) {
                    case 1:
                        ctx.fillStyle = 'green';
                        ctx.fillRect(loc[0], loc[1], size[0], size[1]);
                        break;
                    case 2:
                        ctx.fillStyle = 'yellow';
                        ctx.fillRect(loc[0], loc[1], size[0], size[1]);
                        break;
                }
                loc[0] += diff;
            }
            loc[0] = 0;
            loc[1] += diff;
        }

    }
}
