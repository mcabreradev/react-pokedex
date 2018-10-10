import axios from 'axios';

const url = "https://mcabreradev-pokedex-api.herokuapp.com/pokemons";

class Api {

    getAll(slug = "?$limit="){
        return axios.get(url + slug);
    }
}

export default new Api();