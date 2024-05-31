var score = 0, pacLoc = 0, fruitLoc = 0, ghostLoc = 0;
var board = [];
var ghost = "👻";

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
    document.getElementById("score").innerHTML = score;
}

function fruitSpawnLocation(length, pacLoc) {
    var num = Math.floor(Math.random() * length);
    return (num === pacLoc) ? num + 1 : num;
}

function movePac(direction) {
    board[pacLoc] = "&nbsp;";
    if (direction == 'right') {
        pacLoc = (pacLoc + 1) % (board.length);
        checkLocation(pacLoc);
    } else if (direction == 'left') {
        pacLoc = (pacLoc - 1);
        pacLoc = pacLoc < 0 ? board.length - 1 : pacLoc;
        checkLocation(pacLoc);
    }


}

function checkLocation(loc) {
    if (board[loc] != " ") {
        if (board[loc] == "◦") {
            score += 1;
            document.getElementById("score").innerHTML = score;
        }
        else if (board[loc] == "🍒") {
            ghost = "😱"
            board[ghostLoc] = ghost;
            document.getElementById("board").innerHTML = board.join(" ");
        }
        else if (board[loc] == "👻") {
            board[pacLoc] = "💀";
            document.getElementById("board").innerHTML = board.join(" ");
            score = "Game over";
            document.getElementById("score").innerHTML = score;
            return;
        }
    }

    board[pacLoc] = "😀";
    document.getElementById("board").innerHTML = board.join(" ");
}

function spawnGhost() {
    if (pacLoc > board / 2) {
        ghostLoc = 0;
    } else {
        ghostLoc = board.length - 1;
    }

    board[ghostLoc] = ghost;
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