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
        $('.tab-content').hide();
        $('#game').fadeIn();
    };

    view.initEndGamePage = function() {
        $('.tab-content').fadeOut();
        $('#end-game').delay(1000).fadeIn();
        $('#name-save').hide();
        app.gameboard.endGame();
    };

    view.initLeaderboardPage = function() {
        $('.tab-content').hide();
        $('#leaderboard').fadeIn();
        // TODO get call for app.leaderboard
    };

    view.initAboutPage = function() {
        $('.tab-content').hide();
        $('#about').fadeIn();
    };

    module.view = view;
})(app);