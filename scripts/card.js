'use strict';

app = app || {};

(function(module) {
    function Card(obj) {
        this.name = obj.name;
        this.img_url = obj.img_url;
        this.dex_number = obj.dex_number;
        this.type = obj.type;
    }

    Card.all = [];
    Card.duplicatePokes = [];
    Card.flippedCards = [];

    Card.prototype.toHtml = function(selector) {
        const template = Handlebars.compile($(`${selector}`).text());
        return template(this);
    };

    Card.findMatchingPokemonToDex = (dex_entry, dexNo) => {
        for (let i = 0; i < Card.all.length; i++) {
            if(Card.all[i].dex_number == dexNo) { //if the dex number of the poke in the array matches the number given assign it the dex_entry passed.
                console.log(Card.all[i].dex_number);
                Card.all[i].dex_entry = dex_entry;
                break;
            }
        }
    };

    Card.loadAll = pokemon => {
        Card.all = pokemon.map(pokeObj => new Card(pokeObj));
    };

    Card.duplicateAll = () => {
        for (let i = 0; i < Card.all.length; i++) {
            Card.duplicatePokes.push(Card.all[i]);
            Card.duplicatePokes.push(Card.all[i]);
        }
    };

    Card.shuffle = (array) => {
        //Fisher-Yates Shuffle of an array
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    };


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

    Card.prototype.cardFlip = function() {
        if (!this.containsClass('flipped') && Card.flippedCards.length < 2) {
            this.toggleClass('flipped');
            Card.flippedCards.push(this);
            // only lets two cards be flipped at a time
            if (Card.flippedCards.length === 2) {
                Card.checkMatch();
            }
        }
    };

    Card.checkMatch = () => {
        if (Card.flippedCards[0].attr('data-number') === Card.flippedCards[1].attr('data-number')) {
            Card.flippedCards[0].addClass('match');
            Card.flippedCards[1].addClass('match');
            Card.flippedCards = [];
            app.gameboard.updateScore(4);
        } else {
            setTimeout(Card.flipBack, 700);
            app.gameboard.updateScore(-2);
        }
    };
    
    module.Card = Card;

})(app);