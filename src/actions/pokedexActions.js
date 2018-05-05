import { FETCH_POKEDEX } from './types';
import FirebaseService from "../services/firebase.service";
const _firebaseService = new FirebaseService();

export const fetchPokedex = () => dispatch => {

    if (localStorage.getItem("pokedex") !== null) {
        const pokedex = JSON.parse(localStorage.getItem("pokedex"));
        dispatch({
            type: FETCH_POKEDEX,
            payload: pokedex
        });
    }

    _firebaseService.getAll("pokedex")
    .then(pokedex => {
        localStorage.setItem("pokedex", JSON.stringify( pokedex ));
        dispatch({
            type: FETCH_POKEDEX,
            payload: pokedex
        });
    });
};
