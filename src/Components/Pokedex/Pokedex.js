import React from "react";
import Pokemon from "../Pokemon/Pokemon";
import firebase from '../../Common/firebase';

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
  }

  fetchFirebase () {

    // if exist localstorage
    if(localStorage.getItem("pokedex") !== null){
      return this.setState({ pokedex: JSON.parse(localStorage.getItem("pokedex")) });
    }

    const pokemonsRef = firebase.database().ref('pokedex');
    pokemonsRef.on('value', (snapshot) => {
      this.setState({ pokedex: snapshot.val()});
      localStorage.setItem("pokedex", JSON.stringify(snapshot.val()));
    });
  }

  componentDidMount() {
    this.fetchFirebase();
  }

  render() {
    const { pokedex } = this.state;

    return (pokedex.length > 0) ? (
      <div className="container" style={styles}>
        <div className="columns is-multiline">
          {pokedex.map( (pokemon, key) => (
            pokemon !== null ? <Pokemon pokemon={ pokemon } key={ key } /> : null
          ))}
        </div>
      </div>
    ) : (
      <div>loading...</div>
    );
  }
}

export default Pokedex;
