'use strict';

app = app || {};

(function(module) {
    const leaderboard = {};

    leaderboard.toHtml = function(obj) {
        const template = Handlebars.compile($('#table-template').text());
        return template(obj);
    };

    leaderboard.getScores = () => {
        $('#table-data').empty();
        $.get(`${API_URL}/leaderboard`)
            .then(results => {
                for (let i = 0; i < results.length; i++) {
                    results[i].place = i + 1;
                    $('#table-data').append(leaderboard.toHtml(results[i]));
                }
            });
    };

    leaderboard.postScores = (name, score, cb) => {
        $.post(`${API_URL}/leaderboard/${name}/${score}`)
            .then(() => {
                cb();
            });
    };

    module.leaderboard = leaderboard;

})(app);