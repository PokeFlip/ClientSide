'use strict';

app = app || {};

(function(module) {
    const gameboard = {};

    gameboard.startGame = () => {
        //Shuffle pokes prior to placing them on gameboard
        app.Card.shuffle(app.Card.duplicatePokes); 

        //append them to gameboard
        for (let i = 0; i < app.Card.duplicatePokes.length; i++) { 
            $('.cards').append(app.Card.duplicatePokes[i].toHtml('#card-template'));
        }

        app.Card.flip(); //Assigns flip event listeners.
        gameboard.setTime(20, $('.timer')); //Set time in seconds
    };

    gameboard.endGame = () => {
        const timer = $('.timer').text();
        if ($('.match').length === app.Card.duplicatePokes.length || timer == '00:00') {
            gameboard.winOrLose();
        } // if

    };

    gameboard.winOrLose = () => {
        const timer = $('.timer').text();
        const endGameHeader = $('#end-game-greeting');
        const scoreShow = $('#score-show');
        const score = $('.score span').text();
        const reordered = app.Card.all.sort((a,b) => a.dex_number - b.dex_number); //re orders from shuffled state
        for (let i = 0; i < app.Card.all.length; i++) { //Appends matches to endgame page
            $('#poke-matches').append(reordered[i].toHtml('#match-template'));
        }
        if ($('.match').length === app.Card.duplicatePokes.length) {
            $('#end-game-greeting').fadeIn(1500);
            $('#play-again').fadeIn(1500);
            $('#name-save').fadeIn(1500);
            $('#score-show').fadeIn(1500);
            $('#poke-matches').fadeIn(1500);
            endGameHeader.text('You Win! Save Your Score?');
            scoreShow.text(`Your Score is ${score}`);
        } // all matched
        if (timer === '00:00') { // if timer ran out
            $('#end-game-greeting').fadeIn(1500);
            $('#poke-matches').fadeIn(1500);
            $('#play-again').fadeIn(1500);
            endGameHeader.text('Time Out!');
        } // timer ran out
        // app.leaderboard.setScore(); TODO leaderboard
        // TODO set event listeners for form submission, play again button          
    };

    gameboard.getPokemonByType = (type, cb, cb2) => {
        $.get(`${API_URL}/pokemon/${type}`) //API_URL is defined in the index.html prior to all scripts. linter lies.
            .then(pokemon => {
                app.Card.loadAll(pokemon);
                app.Card.duplicateAll();
            })
            .then(() => {
                if (cb) cb();
            })
            .then(() => {
                if (cb2) cb2();
            }); // callback view.initGamePage
    };

    gameboard.getPokemondex_entry = (dexNo) => {
        $.get(`${API_URL}/pokemonspecies/${dexNo}`)
            .then(dex_entry => {
                //maybe use .replace(/\r/g, "") to get rid of \n
                app.Card.findMatchingPokemonToDex(dex_entry, dexNo);
            });
    };

    gameboard.getMultipleDexEntries = () => {
        for (let i = 0; i < app.Card.all.length; i++) {
            gameboard.getPokemondex_entry(app.Card.all[i].dex_number);
        }
    };

    gameboard.clear = () => {
        $('.cards').empty();
        app.Card.all = [];
        app.Card.duplicatePokes = [];
        $('.score span').text(0);
        $('#poke-matches').empty();
    };

    gameboard.setTime = (duration, display) => {
        let timer = duration, minutes, seconds;
        const interval = setInterval(function() {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;

            display.text(`${minutes}:${seconds}`);

            if (--timer < 0 || $('.match').length === app.Card.duplicatePokes.length) {
                console.log('this is causing the problem');
                clearInterval(interval); // fix timer continuing
                app.view.initEndGamePage();
            }
        }, 1000);
    };

    gameboard.updateScore = (points) => {
        const score = $('.score span');
        if (parseInt(score.text()) == 0 && points > 0) {
            score.text(parseInt(points));
        } // doesn't let score dip below 0

        else if (parseInt(score.text()) != 0) {
            score.text(parseInt(score.text()) + parseInt(points));
        } // when score is not 0

        if ($('.match').length === app.Card.duplicatePokes.length) { // add left over time if win
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
