# ClientSide

**Team Name:** Uranium

**Team Members:** Grace Provost, Richard Livingston, Jack Lomax

**Pitch:** A pokemon memory game. The images are taken from the pokeApi. This will be a single page app for desktop. Pages will include a pokemon type gameboard selector, gameboard, endgame, about, and leaderboard.

**Models:** 
GameBoard:
  - startgame
    - GET request to server. Server queries pokemon table in PokeFlip database. SELECT poke_image FROM pokemon WHERE type=INSERT_TYPE. Then randomly select 5 pokes from the data returned.
  - endgame
    - GET request to server. Server queries pokemon API for further information on pokemon. Displays them.
  - selectgame
  - timer
  - score

Card:
  - flip
  - match

Views:
  - initLeaderboard
    - GET request to server. Server queries learderboard table in PokeFlip database.
  - initAbout
  - initGame
    - Initial Poke API call for all pokemon by name, dex number, type, sprite image
    
 Routes:
  - /game
  - /leaderboard
  - /about
  
Leaderboard:
  - databaseInput
  
  **Features:**
  - MPV: game with one difficulty, 3 types selector, leaderboard
  - Stretch goals: add difficulty, more types
  
  **Databases:**
  - Leaderboard: Name VARCHAR(50), Score INTEGER
  - Pokemon: Dex_Number UNIQUE INTEGER, Name VARCHAR(25), Type VARCHAR(25), "image" VARCHAR(500)


