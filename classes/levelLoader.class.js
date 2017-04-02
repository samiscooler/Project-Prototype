function levelLoaderClass(levels) {
    this.levels = levels;
    this.currentLevel = [];
    this.currentLevelID = null;
    this.loadLevel = function(id) {
        this.currentLevel = this.levels[id];
        this.currentLevelID = id;
    };

    this.place = function() {
        if (gameData.mouse != null) {
            var cords = [(Math.floor(gameData.mouse.x / 50) * 50) / 50, (Math.floor(gameData.mouse.y / 50) * 50) / 50];
            if (levelManager.currentLevel[cords[1]][cords[0]] == 0) {
                levelManager.currentLevel[cords[1]][cords[0]] = 1
            }
        }
    }

    this.renderCurrentLevel = function() {
        var loc = [0, 0];
        var diff = 50;
        var size = [50, 50];

        for (var row in this.currentLevel) {
            for (var tile in this.currentLevel) {
                if (this.currentLevel[row][tile] == 1) {
                    ctx.fillStyle = 'green';
                    ctx.fillRect(loc[0], loc[1], size[0], size[1]);
                }
                loc[0] += diff;
            }
            loc[0] = 0;
            loc[1] += diff;
        }

    }
}
