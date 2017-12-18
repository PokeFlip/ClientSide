'use strict';

app = app || {};

(function(module) {
    const leaderboard = {};

    leaderboard.toHtml = function(obj) {
        const template = Handlebars.compile($('#table-template').text());
        console.log(obj);
        return template(obj);
    };

    leaderboard.getScores = () => {
        $.get(`${API_URL}/leaderboard`)
            .then(results => {
                console.log(typeof results);
                console.log(JSON.stringify(results));

                for (let i = 0; i < results.length; i++) {
                    results[i].place = i + 1;
                    $('#table-data').append(leaderboard.toHtml(results[i]));
                }
            });
    };

    module.leaderboard = leaderboard;

})(app);