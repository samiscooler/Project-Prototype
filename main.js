var c = document.getElementById("gameCanvas");
var ctx = c.getContext("2d");

var gameData = {
    width: c.width,
    height: c.height,
    fps: 30,
    mouse: {
        x: 0,
        y: 0
    },
    gravity: 3,
    air: 0.8,
    keys: {}
}



var levelManager = new levelLoaderClass();

var mouse = new mouseHandler();

var player = new playerSprite(0, 0);

levelManager.loadLevel(0);



setInterval(function() {
    ctx.clearRect(0, 0, gameData.width, gameData.height);
    levelManager.renderCurrentLevel();
    levelManager.keyboard();
    player.update();
    player.render();
    mouse.render(gameData.mouse);
}, 1000 / gameData.fps);

document.addEventListener("keydown", function(e) {
    gameData.keys[e.keyCode] = true;
});

document.addEventListener("keyup", function(e) {
    gameData.keys[e.keyCode] = false;
});

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
    mouse.click();
}, false);
