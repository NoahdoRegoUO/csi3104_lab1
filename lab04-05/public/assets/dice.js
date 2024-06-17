var dice_values = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

class Dice {
    constructor() {
        this.value = dice_values[0];
    }

    roll() {
        // Generate random value from 1 to 6
        this.value = dice_values[Math.floor(Math.random() * (5)) + 1];
    }

    updateElem(id) {
        document.getElementById(id).innerHTML = this.value;
    }
}