'use strict';

app = app || {};

(function (module) {
    const view = {};

    view.initSelectPage = function() {
        $('.tab-content').hide();
        $('#selection').fadeIn();
        if (!($._data( $('.typeSelector')[0], 'events' ))) { //prevents the events from being added more than once.
            $('.typeSelector').on('click', function() {
                event.preventDefault();
                const type = $(this).text().toLowerCase();
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
        $('#score-show').hide(); 
        $('#name-save').hide();
        $('#play-again').hide();
        //hides score, play again, and form save before end game shows, will show in app.gameboard.endgame()
    };

    view.initEndGamePage = function() {
        app.gameboard.endGame();
        $('.tab-content').fadeOut(1000);
        $('#end-game').fadeIn(1200);
        $('#play-again').on('click', function() {
            event.preventDefault();
            app.view.initSelectPage();
        });
        
    };

    view.initLeaderboardPage = function() {
        $('nav').show();
        $('.tab-content').hide();
        $('#leaderboard').fadeIn();
        // TODO get call for app.leaderboard
    };

    view.initAboutPage = function() {
        $('nav').show();
        $('.tab-content').hide();
        $('#about').fadeIn();
    };

    module.view = view;
})(app);