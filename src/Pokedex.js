import React from "react";

import Pokemon from "./Pokemon";

const styles = {
  marginTop: "20px"
};
class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokedex: {
        results: [],
        previous: null,
        next: null
      },
      error: null
    };
  }

  fetchPokedex() {

    // if exist localstorage
    if(localStorage.getItem("pokedex") !== null){
      return this.setState({ pokedex: JSON.parse(localStorage.getItem("pokedex")) });
    }

    // if not, fetch new data
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=32")
      .then(response => {
        return response.json();
      })
      .then(pokedex => {
        localStorage.setItem("pokedex", JSON.stringify(pokedex));
        this.setState({ pokedex });
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  componentDidMount() {
    this.fetchPokedex();
  }

  render() {
    const { pokedex, error } = this.state;

    if (error) {
      return <div>{error.message}</div>;
    }

    return (pokedex.results.length > 0) ? (
      <div className="container" style={styles}>
        <div className="columns is-multiline">
          {pokedex.results.map(pokemon => (
            <Pokemon pokemon={pokemon} key={pokemon.name} />
          ))}
        </div>
      </div>
    ) : (
      <div>loading...</div>
    );
  }
}

export default Pokedex;
