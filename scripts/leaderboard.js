'use strict';

app = app || {};

(function(module) {
    const leaderboard = {};

    leaderboard.toHtml = function(obj) {
        const template = Handlebars.compile($('#table-template').text());
        return template(obj);
    };

    leaderboard.getScores = () => {
        $('.data-row').empty();
        $.get(`${API_URL}/leaderboard`)
            .then(results => {
                $('.data-row').empty();
                for (let i = 0; i < results.length; i++) {
                    results[i].place = i + 1;
                    $('#score-table').append(leaderboard.toHtml(results[i]));
                }
            });
    };

    leaderboard.postScores = (name, score) => {
        $.post(`${API_URL}/leaderboard/${name}/${score}`)
            .then(page('/leaderboard'));
    };

    module.leaderboard = leaderboard;

})(app);