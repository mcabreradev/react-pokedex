import React from "react";
import { render } from "react-dom";

import Header from "./Header";
import Hello from "./Hello";
import Pokedex from "./Pokedex";

const styles = {};

const App = () => (
  <div style={styles}>
    <Header />

    <Pokedex />
  </div>
);

render(<App />, document.getElementById("root"));
