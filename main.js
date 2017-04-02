var c = document.getElementById("gameCanvas");
var ctx = c.getContext("2d");

var gameData = {
    width: c.width,
    height: c.height,
    fps: 30,
    mouse: null
}

var levelManager = new levelLoaderClass(levels);

levelManager.loadLevel(0);



setInterval(function() {

    levelManager.renderCurrentLevel();
}, 1000 / gameData.fps);

function getMousePos(c, evt) {
    var rect = c.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

c.addEventListener('mousemove', function(evt) {
    gameData.mouse = getMousePos(c, evt)
}, false);

c.addEventListener('click', function(evt) {
    levelManager.place();
}, false);
