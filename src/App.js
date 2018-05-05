import React from "react";
import Header from "./components/Header";
import Pokedex from "./components/Pokedex";
import "bulma/css/bulma.css";

// redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <div>
      <Header />
      <Pokedex />
    </div>
  </Provider>
);

export default App;
