'use strict';

app = app || {};

(function (module) {
    const view = {};

    view.initSelectPage = function() {
        $('.tab-content').hide();
        $('nav').show();
        $('#selection').fadeIn();
        $('#end-game').children().hide();
        //hides score, play again, and form save before end game shows, will show in app.gameboard.endgame()
        if (!($._data( $('.typeSelector')[0], 'events' ))) { //prevents the events from being added more than once.
            $('.typeSelector').on('click', function() {
                event.preventDefault();
                const type = $(this).attr('alt');
                app.gameboard.getPokemonByType(type, app.gameboard.getMultipleDexEntries, app.view.initGamePage);
            }); //Have to pass dex entries earlier as they take too long to get (~30 seconds).
        }
        app.gameboard.clear();
    };

    view.initGamePage = function() {
        app.gameboard.startGame();
        $('nav').hide();
        $('.tab-content').hide();
        $('#game').fadeIn();
    };

    view.initEndGamePage = function() {
        $('.tab-content').fadeOut(1000);
        $('#end-game').fadeIn(2000);
        app.gameboard.endGame();
        $('#play-again').on('click', function() {
            event.preventDefault();
            app.view.initSelectPage();
        });

    };

    view.initLeaderboardPage = function() {
        $('nav').show();
        $('.tab-content').hide();
        $('#leaderboard').fadeIn();
        app.leaderboard.getScores();
    };

    view.initAboutPage = function() {
        $('nav').show();
        $('.tab-content').hide();
        $('#about').fadeIn();
    };

    module.view = view;
})(app);