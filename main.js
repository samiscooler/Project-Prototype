var c = document.getElementById("gameCanvas");
var ctx = c.getContext("2d");

const gameData = {
    width: c.width,
    height: c.height,
    fps: 30
}

var levelManager = new levelLoaderClass(levels);

levelManager.loadLevel(0);



setInterval(function() {

    levelManager.renderCurrentLevel();
}, 1000 / fps);
