'use strict';

page('/', app.view.initSelectPage);

page('/about', app.view.initAboutPage);

page('/leaderboard', app.view.initLeaderboardPage);

// page.base('/ClientSide');

page.start();