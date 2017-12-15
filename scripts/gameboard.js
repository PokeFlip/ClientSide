'use strict';

app = app || {};

(function(module) {
    const gameboard = {};
     
    gameboard.startGame = () => {


    };

    gameboard.endGame = () => {
        const timer = $('.timer').text();
        if ($('.match').length === app.Card.cardsArray.length || timer == '00:00') {
            const endGameHeader = $('#end-game-greeting');
            const scoreShow = $('#score-show');
            const score = $('.score span').text();
            setTimeout(function() {
                endGameHeader.addClass('select'); // reset flex direction
                if ($('.match').length === app.Card.cardsArray.length) {
                    endGameHeader.text('You Win! Save Your Score?');
                    scoreShow.text(`Your Score is ${score}`);
                } // all matched
                if (timer === '00:00') { // if timer ran out
                    endGameHeader.text('Time Out! Play Again?'); // Ended HERE <-----
                } // timer ran out
                endGameHeader.innerHTML += "<div class='win2'><button id='easy'>Easy</button> \
        <button id='med'>Medium</button> \
        <button id='hard'>Hard</button></div>";
                setBestScore();
            }, 2300); // settimeout with button creation
            setTimeout(gameMode,2301); //waits to run gameMode until buttons are created
        } // if
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

    gameboard.updateScore = (points) => {
        const score = $('.score span');
        if (parseInt(score) == 0 && points > 0) {
            score.text(parseInt(points));
        } // doesn't let score dip below 0

        else if (parseInt(score.text()) != 0) {
            score.text(parseInt(score.text()) + parseInt(points));
        } // when score is not 0

        if ($('.match').length === app.Card.cardsArray.length) { // add left over time if win
            score.text(parseInt(score.text()) + gameboard.timeScore());
        }

    };

    gameboard.timeScore = () => {
        const timeLeft = $('.timer').text();
        let convertedTime;
    
        convertedTime = parseInt(timeLeft.charAt(3) + timeLeft.charAt(4));
        convertedTime += (parseInt(timeLeft.charAt(1)) * 60);
    
        return convertedTime;
    };

    module.gameboard = gameboard;

})(app);