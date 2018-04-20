import React from "react";

const styles = {
  padding: "5px 5px 5px 0px"
};

function NoPokemon() {
  return (
    <div className="column is-4 has-background-light" style={styles}>
      loading..
    </div>
  );
}

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: {},
      isLoading: false,
      error: null
    };

    this.setState({ pokemon: props.pokemon });
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(this.props.pokemon.url)
      .then(response => {
        return response.json();
      })
      .then(pokemon => pokemon => this.setState({ pokemon, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { pokemon, isLoading, error } = this.state;

    if (error) {
      return <div>{error.message}</div>;
    }

    return isLoading ? (
      <NoPokemon />
    ) : (
      <div className="column is-4 has-background-light">
        <div style={styles}>{pokemon.name}</div>
      </div>
    );
  }
}

export default Pokemon;
