'use strict';

app = app || {};

(function(module) {
    function Card(obj) {
        this.name = obj.name;
        this.img_url = obj.img_url;
        this.dexNumber = obj.dex_number;
        this.type = obj.type;
    }

    Card.all = [];

    Card.prototype.toHtml = function(selector) {
        const template = Handlebars.compile($(`${selector}`).text());
        return template(this);
    };

})(app);