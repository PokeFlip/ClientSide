# ClientSide

**Team Name:** Uranium

**Team Members:** Grace Provost, Richard Livingston, Jack Lomax

**Pitch:** A pokemon memory game. The images are taken from the pokeApi. This will be a single page app for desktop. Pages will include a pokemon type gameboard selector, gameboard, endgame, about, and leaderboard.

**Models:** 
GameBoard:
  - startgame
    - GET request to server. Server queries pokemon table in PokeFlip database. SELECT poke_image FROM pokemon WHERE type=INSERT_TYPE. Then randomly select 5 pokes from the data returned.
    - from 5 pokes returned, createCardObj then app.card.toHtml
  - endgame
    - GET request to server. Server queries pokemon API for pokedex entries on pokemon.
    - run app.card.toHtml on each poke to append them to the page.
  - timer
  - score

Card:
  - flip prototype
  - match prototype
  - createCardObj
  - toHtml
    - Will fill in handlebars template
  - Card.all array to hold card objects

Views:
  - initLeaderboard
    - GET request to server. Server queries learderboard table in PokeFlip database. Have a function that counts place for each score in the table.
  - initAbout
  - initSelect
    - event listeners on each type. On click will change to initgame page.
  - initGamePage
    - runs app.gameBoard.startgame
    - event listener when all are matched or time runs out, which will send user to end game page.
  - initEndGamePage
    - runs app.gameBoard.endgame
    - event listener when name submit button is clicked which will POST score to database, then send user to leaderboard page.
    
 Routes:
  - /game
    - app.view.initSelect
  - /leaderboard
    - app.view.initLeaderboard
  - /about
    - app.view.initAbout
  
Leaderboard:
  - databaseInput
  
  **Features:**
  - MPV: game with one difficulty, 3 types selector, leaderboard
  - Stretch goals: add difficulty, more types
  
  **Databases:**
  - Leaderboard: Name VARCHAR(50), Score INTEGER
  - Pokemon: Dex_Number UNIQUE INTEGER, Name VARCHAR(25), Type VARCHAR(25), "image" VARCHAR(500)
