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
      isLoading: false,
      error: null
    };
  }

  fetchRequest() {
    this.setState({ isLoading: true });

    // fetch("https://pokeapi.co/api/v2/pokemon/")
    //   .then(response => {
    //     return response.json();
    //   })
    //   .then(pokedex => this.setState({ pokedex, isLoading: false }))
    //   .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchRequest();
  }

  render() {
    const { pokedex, isLoading, error } = this.state;

    console.log("pokedex.results", pokedex);

    if (error) {
      return <div>{error.message}</div>;
    }

    return isLoading ? (
      <div>loading...</div>
    ) : (
      <div className="container" style={styles}>
        <div className="columns is-multiline">
          {pokedex.results.map(pokemon => (
            <Pokemon pokemon={pokemon} key={pokemon.name} />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
