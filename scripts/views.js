'use strict';

app = app || {};

(function (module) {
    const view = {};

    view.initSelectPage = function() {
        $('.tab-content').hide();
        $('#selection').fadeIn();
    };

    view.initGamePage = function() {
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
    };

    view.initAboutPage = function() {
        $('.tab-content').hide();
        $('#about').fadeIn();
    };

    module.view = view;
})(app);