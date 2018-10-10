import {
    FETCH_POKEDEX,
    FILTER_POKEDEX,
    GET_TYPES,
    GET_WEAKNESS,
    GET_ABILITIES,
    SET_NAME,
    SET_SELECTED_TYPE,
    SET_SELECTED_WEAKNESS,
    SET_SELECTED_ABILITIES,
    IS_LOADING,
    INCREMENT_LIMIT,
    RESET_LIMIT
} from './types';

import {
    getListFromArrKey,
    filterPokemons
} from '../../util';

import api from "../../services/api";

export const fetchPokedex = () => async (dispatch, getState) => {

    dispatch({
        type: IS_LOADING,
        payload: true
    });

    try {
        const response = await api.getAll();
        const pokedex = response.data.data;

        dispatch({
            type: FETCH_POKEDEX,
            payload: pokedex
        });

        dispatch({
            type: FILTER_POKEDEX,
            payload: filterPokemons(getState("pokedex").pokedex)
        });

        dispatch({
            type: GET_TYPES,
            payload: getListFromArrKey(pokedex, 'type')
        });

        dispatch({
            type: GET_WEAKNESS,
            payload: getListFromArrKey(pokedex, 'weakness')
        });

        dispatch({
            type: GET_ABILITIES,
            payload: getListFromArrKey(pokedex, 'abilities')
        });

        dispatch({
            type: IS_LOADING,
            payload: false
        });
        
    } catch (error) {
        console.log('fetchPokedex action error', error);
        dispatch({
            type: IS_LOADING,
            payload: false
        });
    }
};

export const filterPokedex = (pokemons) => (dispatch, getState) => {

    dispatch({
        type: FILTER_POKEDEX,
        payload: filterPokemons(getState("pokedex").pokedex)
    });
};

export const setName = (name) => (dispatch, getState) => {

    dispatch({
        type: SET_NAME,
        payload: name
    });

    dispatch({type: RESET_LIMIT});

    dispatch({
        type: FILTER_POKEDEX,
        payload: filterPokemons(getState("pokedex").pokedex)
    });
};

export const setSelectedType = (selectedType) => (dispatch, getState) =>  {
    dispatch({
        type: SET_SELECTED_TYPE,
        payload: selectedType
    });

    dispatch({type: RESET_LIMIT});

    dispatch({
        type: FILTER_POKEDEX,
        payload: filterPokemons(getState("pokedex").pokedex)
    });
};

export const setSelectedWeakness = (selectedWeakness) => (dispatch, getState) => {
    dispatch({
        type: SET_SELECTED_WEAKNESS,
        payload: selectedWeakness
    });

    dispatch({type: RESET_LIMIT});

    dispatch({
        type: FILTER_POKEDEX,
        payload: filterPokemons(getState("pokedex").pokedex)
    });
};

export const setSelectedAbilities = (selectedAbility) => (dispatch, getState) => {
    dispatch({
        type: SET_SELECTED_ABILITIES,
        payload: selectedAbility
    });

    dispatch({type: RESET_LIMIT});

    dispatch({
        type: FILTER_POKEDEX,
        payload: filterPokemons(getState("pokedex").pokedex)
    });
};

export const incrementLimit = (limit) => (dispatch, getState) => {
    dispatch({
        type: INCREMENT_LIMIT,
        payload: limit || 8
    });

    dispatch({
        type: FILTER_POKEDEX,
        payload: filterPokemons(getState("pokedex").pokedex)
    });
};