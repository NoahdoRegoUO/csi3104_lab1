var dice = []
dice = Array(6).fill(new Dice());

function rollDice() {
    console.log(dice);
    for (var i = 0; i < 6; i++) {
        dice[i].roll();
        dice[i].updateElem("dice-value-" + (i + 1));
    }
}