export const techs = [
    "react",
    "redux",
    "axios",
    "mongo",
    "heroku",
    "bulma",
    "flowtype"
];

export const firebaseConfig = {
    apiKey: "AIzaSyDgqeNkCUodXHzrAl1BNQH7urZUNlKtpp8",
    authDomain: "pokedex-ea634.firebaseapp.com",
    databaseURL: "https://pokedex-ea634.firebaseio.com",
    projectId: "pokedex-ea634",
    storageBucket: "",
    messagingSenderId: "713621560394"
};

export const getListFromArrKey = (arr, key) => {
    return arr.map(item => item[key]) // set all keys
        .reduce((a, b) => Array.isArray(b) ? a.concat(b) : [], []) // flat all keys
        .filter((key, pos, arr) => arr.indexOf(key) === pos) // remove duplicates
        .sort((last, next) => last > next ? 1 : -1); // alphabetical order
};

export const filterPokemons = (state) => {

    const {
        pokedex,
        selectedType,
        name,
        selectedWeakness,
        selectedAbilities,
        limit
    } = state;

    return pokedex.filter(pokemon => {
            return pokemon.name.toLowerCase().indexOf(name.toLowerCase()) >= 0 &&
                (selectedType ? pokemon.type.some(type => type === selectedType) : true) &&
                ((selectedWeakness && pokemon.weakness !== undefined) ? pokemon.weakness.some(weakness => weakness === selectedWeakness) : true) &&
                (selectedAbilities ? pokemon.abilities.some(abilities => abilities === selectedAbilities) : true);
        })
        .slice(0, limit);
}