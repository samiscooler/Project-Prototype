function mouseHandler() {
    this.mouseMode = "place";


    this.mouseModes = {
        place: {
            size: [50, 50],
            colour: "blue",
            distance: 5
        },
        eraser: {
            size: [50, 50],
            colour: "red",
            distance: 5
        }
    }
    this.render = function(loc) {
        switch (this.mouseMode) {
            case "place":
                ctx.strokeStyle = this.mouseModes[this.mouseMode].colour;
                ctx.strokeRect((Math.floor(loc.x / 50) * 50), (Math.floor(loc.y / 50) * 50), this.mouseModes[this.mouseMode].size[0], this.mouseModes[this.mouseMode].size[0]);
                break;
        }
    }

    this.click = function() {
        if (this.mouseMode = "place") {
            if (gameData.mouse != null) {
                var cords = [(Math.floor(gameData.mouse.x / 50) * 50) / 50, (Math.floor(gameData.mouse.y / 50) * 50) / 50];
                if (levelManager.currentLevel[cords[1]][cords[0]] == 0 && colCheck(player, {
                        x: cords[0] * 50,
                        y: cords[1] * 50,
                        w: 50,
                        h: 50
                    }, false) == null) {
                    levelManager.currentLevel[cords[1]][cords[0]] = 1
                }
            }
        }

    }
}
