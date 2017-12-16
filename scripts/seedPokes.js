// const API_URL2 = "https://pokeflip.herokuapp.com";
const API_URL2 = "http://localhost:3000";


let callAllPokemon = (start, finish) => {
    for (let i = start; i <= finish; i++) {
        $.get(`${API_URL2}/pokemon/dex/${i}`);
    }
}; //will call pokemon from the api in batches to not overload the api. To place into local databse, change to local API and seed in batches of 40. Call in the browser to invoke.