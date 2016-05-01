var TurboSnake = TurboSnake || {};

TurboSnake.Game_Over = function() {};


TurboSnake.Game_Over.prototype = {


    preload : function() {
        // Here we load all the needed resources for the level.
        // In our case, that's just two squares - one for the snake body and one for the apple.
        this.game.load.image('gameover', '../assets/images/gameover.png');
    },

    create : function() {

        // Create button to start game similar to the main menu.
        this.add.button(0, 0, 'gameover', this.startGame, this);

        var final_score = '$' + score.toString();
        if (score > 0) {
            final_score +=  ',000';
        }
/*
        var earned_money = '$' + (score * multiplier).toString();
        if (earned_money > 0) {
            earned_money += ',000';
        }*/

        console.log(final_score);

        // Last Score Info.
        this.game.add.text(210, 350, "YOU EARNED", { font: "bold 16px sans-serif", fill: "#46c0f9", align: "center"});
        this.game.add.text(340, 350, final_score.toString(), { font: "bold 16px sans-serif", fill: "#fff", align: "center" });

    },

    startGame: function () {
        // increase debt
        debt *= 1.1;

        // increase credit
        credit += score*1000;

        // generate new powerups
        getRandomPowerUps();

        // Change the state to the actual game.
        this.state.start('Home');

    }

};