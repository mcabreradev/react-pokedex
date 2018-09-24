import {
  FETCH_POKEDEX,
  GET_TYPES,
  GET_WEAKNESS,
  GET_ABILITIES,
  // GET_NAME,
  SET_NAME,
  // GET_SELECTED_TYPE,
  SET_SELECTED_TYPE
} from './types';
import Firebase from "../../services/firebase";
const firebase = new Firebase();

export const fetchPokedex = () => dispatch => {

  firebase.fetch("pokedex").then(pokedex => {

    dispatch({
      type: FETCH_POKEDEX,
      payload: pokedex
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

  });
};

const getListFromArrKey = (arr, key) => {

  return arr.map(item => item[key]) // set all keys
    .reduce((a, b) => Array.isArray(b) ? a.concat(b) : [], []) // flat all keys
    .filter((key, pos, arr) => arr.indexOf(key) === pos) // remove duplicates
    .sort((last, next) => last > next ? 1 : -1); // alphabetical order
};

export const setName = (name) => dispatch => { 
  dispatch({
    type: SET_NAME,
    payload: name
  });
};

export const setSelectedType = (selectedType) => dispatch => { 
  dispatch({
    type: SET_SELECTED_TYPE,
    payload: selectedType
  });
};