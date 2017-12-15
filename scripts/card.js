'use strict';

app = app || {};


(function(module) {
    const card = {};

    function Card(obj) {
        this.name = obj.name;
        this.img_url = obj.img_url;
        this.dexNumber = obj.dex_number;
        this.type = obj.type;
    }

    Card.all = [];
    Card.cardsArray = [];
    Card.flippedCards = [];

    Card.getPokemonByType = (type, cb) => {
        $.get(`/pokemon/${type}`)
            .then(pokemon => Card.loadAll(pokemon))
            .then(cb()); // callback view.initGamePage
    };

    Card.prototype.toHtml = function(selector) {
        const template = Handlebars.compile($(`${selector}`).text());
        return template(this);
    };

    Card.loadAll = pokemon => {
        Card.all = pokemon.map(pokeObj => new Card(poke));
    };

    // function createCards() {
    //     let cardsDiv = document.querySelector(".cards");
    //     for (let i = 0; i< cardsArray.length; i++) {
    //       let newCard = document.createElement("div");
    //       newCard.className = 'card';
    //       newCard.id = cardsArray[i];
    //       cardsDiv.appendChild(newCard);


    // function cardClick() {
    //     let cards = document.getElementsByClassName('card');
    //     for (let i = 0; i<cards.length; i++) {
    //       cards[i].addEventListener('click', function() {
    //         if (!this.classList.contains('flipped') && flippedCards.length < 2) {
    //           this.classList.toggle('flipped');
    //           flippedCards.push(this);
    //           // only lets two cards be flipped at a time
    //           if (flippedCards.length === 2) {
    //             checkMatch();
    //           }
    //         }
    //       });
    //     }
    //   }

    function cardClick() {
        for (let i = 0; i < Card.length; i++) {
            $(Card)[i].addEventListener('click', function() {
                if (!this.classList.contains('flipped') && app.flippedCards.length < 2) {
                    this.classList.toggle('flipped');
                    Card.push(this);
                    // only lets two cards be flipped at a time
                    if (app.flippedCards.length === 2) {
                        checkMatch();
                    }
                }
            });
        }
    }

    function checkMatch() {
        if (app.flippedCards[0].getAttribute('id') === app.flippedCards[1].getAttribute('id')) {
            app.flippedCards[0].classList.add('match');
            app.flippedCards[1].classList.add('match');
            app.flippedCards = [];
            updateScore(4);
        } else {
            setTimeout(flipBack, 700);
            updateScore(-2);
        }
    }
    module.card = card;

})(app);