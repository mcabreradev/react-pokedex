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
} from '../actions/types';

const defaultState ={
    limit: 16
}

const initialState = {
  pokedex: [],
  pokemons: [],
  types: [],
  weakness: [],
  abilities: [],
  name: "",
  selectedType: "",
  isLoading: false,
  limit: 16
};

export default function (state = initialState, action) {
  switch (action.type) {

    case FETCH_POKEDEX:
      return {
        ...state,
        pokedex: action.payload
      };
    
    case FILTER_POKEDEX:
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
    
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };

    case INCREMENT_LIMIT:
      return {
        ...state,
        limit: state.limit + action.payload
      };
    
    case RESET_LIMIT:
      return {
        ...state,
        limit: defaultState.limit
      };

    default:
      return state;
  }
}