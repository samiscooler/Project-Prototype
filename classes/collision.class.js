function colCheck(shapeA, shapeB, move) {
    // get the vectors to check against
    var vX = (shapeA.x + (shapeA.w / 2)) - (shapeB.x + (shapeB.w / 2)),
        vY = (shapeA.y + (shapeA.h / 2)) - (shapeB.y + (shapeB.h / 2)),
        // add the half ws and half hs of the objects
        hws = (shapeA.w / 2) + (shapeB.w / 2),
        hhs = (shapeA.h / 2) + (shapeB.h / 2),
        colDir = null;

    // if the x and y vector are less than the half w or half h, they we must be inside the object, causing a collision
    if (Math.abs(vX) < hws && Math.abs(vY) < hhs) {
        // figures out on which side we are colliding (top, bottom, left, or right)
        var oX = hws - Math.abs(vX),
            oY = hhs - Math.abs(vY);
        if (oX >= oY) {
            if (vY > 0) {
                colDir = "t";
                if (move) {
                    shapeA.y += oY;
                }
            }
            else {
                colDir = "b";
                if (move) {
                    shapeA.y -= oY;
                }
            }
        }
        else {
            if (vX > 0) {
                colDir = "l";
                if (move) {
                    shapeA.x += oX;
                }
            }
            else {
                colDir = "r";
                if (move) {
                    shapeA.x -= oX;
                }
            }
        }
    }
    return colDir;
}
