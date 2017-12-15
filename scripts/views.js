'use strict';

app = app || {};

(function (module) {
    const view = {};

    view.initSelectPage = function() {
        $('.tab-content').hide();
        $('#selection').fadeIn();
        $('#types button').on('click', function() {
            event.preventDefault();
            const type = $(this).text().toLowerCase();
            app.Card.getPokemonByType(type, view.initGamePage());
        });
    };

    view.initGamePage = function() {
        app.gameboard.startGame();
        $('.tab-content').hide();
        $('#game').fadeIn();
        //TODO set event listeners for all cards flipped / time = 0.
    };

    view.initEndGamePage = function() {
        $('.tab-content').fadeOut();
        $('#end-game').delay(1000).fadeIn();
        $('#name-save').hide();
        app.gameboard.endGame();
        // TODO set event listeners for form submission, play again button
        // TODO call for pokemon matches view
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