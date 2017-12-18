# ClientSide

**Team Name:** Uranium

**Team Members:** Grace Provost, Richard Livingston, Jack Lomax

**Pitch:** A pokemon memory game. The images are taken from the pokeApi. This will be a single page app for desktop. Pages will include a pokemon type gameboard selector, gameboard, endgame, about, and leaderboard.

**Models:** 
GameBoard:
  - startgame
    - Append cards to gameboard.
    - Set event listeners to the cards for flipping, matching, flipback
  - endgame
    - Different end game greeting depending on win or lose. Get to enter name into score system if win.
    - GET request to server. Server queries pokemon API for pokedex entries on pokemon.
    - run app.card.toHtml on each poke to append them to the page.
  - GetPokemonByType
    - Gets pokes according to type button clicked on selection page.
  - GetPokemonDexEntry
  - timer
  - score

Card:
  - flip prototype
  - match prototype
  - createCardObj
  - toHtml
    - Will fill in handlebars template
  - Card.all array to hold card objects
  - loadAll
    - GET request to server. Server queries pokemon table in PokeFlip database. SELECT poke_image FROM pokemon WHERE type=INSERT_TYPE. Then create objects of them, and push into Card.all array.

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
  - postNewScore
  - getLeaderboard
  
 Server Routes:
  - get to pokeAPI that gets pokemon and makes a pokemon object with type, name, dex number, and image url.
  - get to pokeAPI that gets a pokemon description and sends it back to client.
  - get to pokemon table that will send object with type, anem, dex number, and image url.
  - post to leaderboard table that will insert into name and score.
  - inserPokemon, loadLeaderboard, and loadPokemon functions.
  
  **Features:**
  - MPV: game with one difficulty, multiple types selector, leaderboard, meet matches
  - Stretch goals: add difficulty, gameboard colored to type
  
  **Databases:**
  - Leaderboard: Name VARCHAR(50), Score INTEGER
  - Pokemon: Dex_Number UNIQUE INTEGER, Name VARCHAR(25), Type VARCHAR(25), "image" VARCHAR(500)
