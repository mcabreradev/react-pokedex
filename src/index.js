import React from "react";
import { render } from "react-dom";

import Header from "./Common/Header";
import Pokedex from "./Components/Pokedex/Pokedex";

import 'bulma/css/bulma.css';
const styles = {};

const App = () => (
  <div style={styles}>
    <Header />

    <Pokedex />
  </div>
);

render(<App />, document.getElementById("root"));
