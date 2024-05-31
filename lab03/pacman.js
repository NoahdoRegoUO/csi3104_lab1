var pacLoc, fruitLoc = 0;
var board = []

function createGame(n) {
    board = new Array(n);
    board.fill("◦");

    // Initialize Pacman in middle
    pacLoc = Math.floor(n / 2);
    board[pacLoc] = "😀";

    // Randomize fruit on board
    fruitLoc = fruitSpawnLocation(n, pacLoc);
    board[fruitLoc] = "🍒";

    document.getElementById("board").innerHTML = board.join(" ");
}

function fruitSpawnLocation(length, pacLoc) {
    var num = Math.floor(Math.random() * length);
    return (num === pacLoc) ? num + 1 : num;
}

function movePac(direction) {
    board[pacLoc] = "&nbsp;";
    if (direction == 'right') {
        pacLoc = (pacLoc + 1) % (board.length);
    } else if (direction == 'left') {
        pacLoc = (pacLoc - 1);
        pacLoc = pacLoc < 0 ? board.length - 1 : pacLoc;
    }

    board[pacLoc] = "😀";
    document.getElementById("board").innerHTML = board.join(" ");
}

function spawnGhost() {
    let ghostLoc;
    if (pacLoc > board / 2) {
        ghostLoc = 0;
    } else {
        ghostLoc = board.length - 1;
    }

    board[ghostLoc] = "👻";
    document.getElementById("board").innerHTML = board.join(" ");
}

// Detect key presses
document.onkeyup = function (e) {
    switch (e.key) {
        case "ArrowLeft":
            movePac('left');
            break;
        case "ArrowRight":
            movePac('right');
            break;
    }
};

createGame(10);
setTimeout(spawnGhost, 2000);