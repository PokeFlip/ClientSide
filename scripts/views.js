'use strict';

app = app || {};

(function (module) {
    const view = {};

    view.initSelectPage = function() {
        $('.tab-content').hide();
        $('#selection').show();
    };

    view.initGamePage = function() {
        $('.tab-content').hide();
        $('#game').show();
    };

    view.initEndGamePage = function() {
        $('.tab-content').hide();
        $('#end-game').show();
    };

    view.initLeaderboardPage = function() {
        $('.tab-content').hide();
        $('#leaderboard').show();
    };

    view.initAboutPage = function() {
        $('.tab-content').hide();
        $('#about').show();
    };

    module.view = view;
})(app);