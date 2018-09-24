import {
  FETCH_POKEDEX,
  GET_TYPES,
  GET_WEAKNESS,
  GET_ABILITIES,
  SET_NAME,
  SET_SELECTED_TYPE,
  SET_SELECTED_WEAKNESS,
  SET_SELECTED_ABILITIES
} from '../actions/types';

const initialState = {
  pokemons: [],
  types: [],
  weakness: [],
  abilities: [],
  name: "",
  selectedType: ""
};

export default function (state = initialState, action) {
  switch (action.type) {

    case FETCH_POKEDEX:
      return {
        ...state,
        pokemons: action.payload
      };

    case GET_TYPES:
      return {
        ...state,
        types: action.payload
      };

    case GET_WEAKNESS:
      return {
        ...state,
        weakness: action.payload
      };

    case GET_ABILITIES:
      return {
        ...state,
        abilities: action.payload
      };

    case SET_NAME:
      return {
        ...state,
        name: action.payload
      };

    case SET_SELECTED_TYPE:
      return {
        ...state,
        selectedType: action.payload
      };

    case SET_SELECTED_WEAKNESS:
      return {
        ...state,
        selectedWeakness: action.payload
      };

    case SET_SELECTED_ABILITIES:
      return {
        ...state,
        selectedAbilities: action.payload
      };

    default:
      return state;
  }
}