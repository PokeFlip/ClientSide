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

    card.all = [];
    card.cardsArray = [];
    card.flippedCards = [];

    card.getPokemonByType = (type, cb) => {
        $.get(`/pokemon/${type}`)
            .then(pokemon => {
                console.log(pokemon);
                Card.loadAll(pokemon);
            })
            .then(() => {
                if (cb) cb();
            }); // callback view.initGamePage
    };

    Card.prototype.toHtml = function(selector) {
        const template = Handlebars.compile($(`${selector}`).text());
        return template(this);
    };

    card.loadAll = pokemon => {
        Card.all = pokemon.map(pokeObj => new Card(poke));
    };

    // function createCards() {
    //     let cardsDiv = document.querySelector(".cards");
    //     for (let i = 0; i< cardsArray.length; i++) {
    //       let newCard = document.createElement("div");
    //       newCard.className = 'card';
    //       newCard.id = cardsArray[i];
    //       cardsDiv.appendChild(newCard);

    function createCards() {
        let cardsDiv = $("cards")
    }


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
        let cards = $('card');
        for (let i = 0; i < Card.length; i++) {
            $(Card)[i].addEventListener('click', function() {
                if (!this.containsClass('flipped') && flippedCards.length < 2) {
                    this.toggleClass('flipped');
                    Card.push(this);
                    // only lets two cards be flipped at a time
                    if (flippedCards.length === 2) {
                        checkMatch();
                    }
                }
            });
        }
    }
    // function checkMatch() {
    //     if (flippedCards[0].getAttribute('id') === flippedCards[1].getAttribute('id')) {
    //       flippedCards[0].classList.add('match');
    //       flippedCards[1].classList.add('match');
    //       flippedCards = [];
    //       updateScore(4);
    //     } else {
    //       setTimeout(flipBack, 700);
    //       updateScore(-2);
    //     }
    //   }
    function checkMatch() {
        if (Card.flippedCards[0].attr('data-number') === Card.flippedCards[1].attr('data-number')) {
            Card.flippedCards[0].addClass('match');
            Card.flippedCards[1].addClass('match');
            Card.flippedCards = [];
        }
    }
    
    module.card = card;

})(app);