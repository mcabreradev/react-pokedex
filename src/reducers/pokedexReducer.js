import { FETCH_POKEDEX } from '../actions/types';

const initialState = {
  pokedex: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POKEDEX:
      return {
        ...state,
        pokedex: action.payload
      };
    default:
      return state;
  }
}