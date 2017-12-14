'use strict';

var app = app || {}; // eslint-disable-line


(function (module) {
    let gameView = {}; // eslint-disable-line

    gameView.initSelectPage = function() {
        $('main section').hide();
        $('#selection').show();
    };
// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓ Do we need this initGamePage?↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    gameView.initGamePage = function() {
        $('main section').hide();
        $('#game-board').show();
    };

    gameView.initLeaderboardPage = function(){
        $('main section').hide();
        $('#leaderboard').show();
    };

    gameView.initAboutPage = function(){
        $('main section').hide();
        $('#about').show();
    };
    module.gameView = gameView;
})(app);