import React from "react";
import Pokemon from "../Pokemon";
import FirebaseService from "../../services/firebase.service";

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
      }
    };

    this.firebaseService = new FirebaseService();
  }

  fetch() {
    
    if (localStorage.getItem("pokedex") !== null) {
      return this.setState({
        pokedex: JSON.parse(localStorage.getItem("pokedex"))
      });
    }

    this.firebaseService.getAll("pokedex")
      .then(pokedex => {
        this.setState({ pokedex });
        localStorage.setItem("pokedex", JSON.stringify(pokedex));
      })
      .catch(err => console.error(`Error: ${err.message}`));
  }

  componentDidMount() {
    this.fetch();
  }

  render() {
    const { pokedex } = this.state;

    return pokedex.length > 0 ? (
      <div className="container" style={styles}>
        <div className="columns is-multiline">
          {pokedex.map(
            (pokemon, key) =>
              pokemon !== null ? <Pokemon pokemon={pokemon} key={key} /> : null
          )}
        </div>
      </div>
    ) : (
      <div>loading...</div>
    );
  }
}

export default Pokedex;
