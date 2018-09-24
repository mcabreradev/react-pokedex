import {
  FETCH_POKEDEX,
  GET_TYPES,
  GET_WEAKNESS,
  GET_ABILITIES,
  SET_NAME,
  SET_SELECTED_TYPE,
  SET_SELECTED_WEAKNESS,
  SET_SELECTED_ABILITIES,
  IS_LOADING,
} from './types';
import { getListFromArrKey } from '../../util';
import firebase from "../../services/firebase";

export const fetchPokedex = () => async (dispatch) => {
  dispatch({type: IS_LOADING, payload: true});

  try {
    const pokedex = await firebase.fetch("pokedex");
    dispatch({type: FETCH_POKEDEX, payload: pokedex});
    dispatch({type: GET_TYPES, payload: getListFromArrKey(pokedex, 'type')});
    dispatch({type: GET_WEAKNESS, payload: getListFromArrKey(pokedex, 'weakness')});
    dispatch({type: GET_ABILITIES, payload: getListFromArrKey(pokedex, 'abilities')});
    dispatch({type: IS_LOADING, payload: false});
  } catch (error) {
    console.log('fetchPokedex action error', error);
    dispatch({type: IS_LOADING, payload: false});
  }
};

export const setName = (name) => dispatch => { 
  try {
    dispatch({type: SET_NAME, payload: name});
  } catch (error) {
    console.log('setName action error', error);
  }
};

export const setSelectedType = (selectedType) => dispatch => { 
  try {
    dispatch({type: SET_SELECTED_TYPE, payload: selectedType});
  } catch (error) {
    console.log('setSelectedType action error', error);
  }
};

export const setSelectedWeakness = (selectedWeakness) => dispatch => { 
  try {
    dispatch({type: SET_SELECTED_WEAKNESS, payload: selectedWeakness});
  } catch (error) {
    console.log('setSelectedWeakness action error', error);
  }
};

export const setSelectedAbilities = (selectedAbility) => dispatch => { 
  try {
    dispatch({type: SET_SELECTED_ABILITIES, payload: selectedAbility});
  } catch (error) {
    console.log('setSelectedAbilities action error', error);
  }
};
