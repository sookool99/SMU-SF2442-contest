var playerCount = parseInt(readline()); // number of drones in the race. You are always the first drone in the list.
var laps = parseInt(readline()); // number of laps
var boosts = parseInt(readline()); // number of boosts you can use for this race
var checkpointCount = parseInt(readline()); // number of checkpoints for one lap
var checkpoints = []
for (var i = 0; i < checkpointCount; i++) {
    var inputs = readline().split(' ');
    var checkpointX = parseInt(inputs[0]);
    var checkpointY = parseInt(inputs[1]);
    checkpoints.push([checkpointX,checkpointY])
}
while (true) {

    for (var i = 0; i < playerCount; i++) {
        var inputs = readline().split(' ');
        var x = parseInt(inputs[0]);
        var y = parseInt(inputs[1]);
        var vx = parseInt(inputs[2]);
        var vy = parseInt(inputs[3]);
        var nextCheckPointId = parseInt(inputs[4]);
        if (i === 0) {
            myVx = 3*vx;
            myVy = 3*vy;
        }else if (i === 1) {
            targetX = x - myVx;
            targetY = y - myVy;
        }

    }

    print(targetX + ' ' + targetY +  ' ' + '100');
}
