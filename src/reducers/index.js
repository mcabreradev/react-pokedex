import { combineReducers } from 'redux';
import pokedexReducer from './pokedexReducer';

export default combineReducers({
  pokedex: pokedexReducer
});