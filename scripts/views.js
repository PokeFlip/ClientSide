'use strict';

var app = app || {}; // eslint-disable-line


(function (module) {
    let gameView = {}; // eslint-disable-line

    gameView.initSelectPage = function() {
        $('.tab-content').hide();
        $('#selection').show();
    };

    gameView.initGamePage = function() {
        $('.tab-content').hide();
        $('#game').show();
    };

    gameView.initEndGamePage = function() {
        $('.tab-content').hide();
        $('#end-game').show();
    };

    gameView.initLeaderboardPage = function() {
        $('.tab-content').hide();
        $('#leaderboard').show();
    };

    gameView.initAboutPage = function() {
        $('.tab-content').hide();
        $('#about').show();
    };

    module.gameView = gameView;
})(app);