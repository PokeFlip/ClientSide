'use strict'

app = app || {};

(function(module) {
    const gameboard = {};
     
    gameboard.startGame = () => {


    };

    gameboard.endGame = () => {

    };

    gameboard.setTime = (duration, display) => {
        let timer = duration, minutes, seconds;
        let interval = setInterval(function() {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;

            display.text(`${minutes}:${seconds}`);

            if (--timer < 0 || $('.match').length === app.Card.cardsArray.length) {
                clearInterval(interval); // fix timer continuing
                gameboard.endGame();
            }
        }, 1000);
    };

    

    gameboard.setUpScore = () => {

    }

    gameboard.updateScore = (points) => {
        const score = $('.score').children();
        if (parseInt(score) == 0 && points > 0) {
            score.text(parseInt(points))[0];
        } // doesn't let score dip below 0

        else if (parseInt(score.text()[0]) != 0) {
            score.text(parseInt(score.text()[0]) + parseInt(points))[0];
        } // when score is not 0

        if ($('.match').length === app.Card.cardsArray.length) { // add left over time if win
            score.text(parseInt(score.text()[0]) + gameboard.timeScore())[0];
        }

    };

    module.gameboard = gameboard;

})(app);