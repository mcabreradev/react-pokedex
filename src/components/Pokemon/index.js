import React, { Component } from "react";

import './styles.css';

const styles = {
  padding: "5px 0px 0px 0px"
};

function NoPokemon() {
  return (
    <div className="column is-4 has-background-light" style={styles}>
      loading..
    </div>
  );
}

function getTypeClassname(name) {
  let _class = "has-background-primary has-text-white";

  if ( name === 'poison') {
    _class = "has-background-danger has-text-white"
  }

  if ( name === 'grass') {
    _class = "has-background-success has-text-white"
  }

  if ( name === 'fire') {
    _class = "has-background-warning has-text-black"
  }

  if ( name === 'water') {
    _class = "has-background-info has-text-white"
  }

  if ( name === 'ground') {
    _class = "has-background-grey-light has-text-white"
  }

  if ( name === 'flying') {
    _class = "has-background-link has-text-light"
  }

  return _class;
}

class Pokemon extends Component {

  render() {
    const { pokemon } = this.props;

    return pokemon ? (
      <div className="column is-3-desktop is-3-tablet">
        <div className="card has-background-white" style={ styles }>
          <header className="card-header">
            <img src={ pokemon ? pokemon.ThumbnailImage : pokemon.name } alt={ pokemon.name }  className="centered-img" />
          </header>

          <div className="card-content">
            <div className="content is-size-7 has-text-grey-dark has-text-weight-bold">
              <p className="is-capitalized is-size-6">{ pokemon.name }</p>
              <p>Order: { pokemon.number }</p>   
              <p>Height: { pokemon.height }</p>   
              <p>Weight: { pokemon.weight }</p>   
            </div>
          </div>

          <footer className="card-footer">
            { pokemon.type ? pokemon.type.map((type, key) => (
              <p className={ "card-footer-item is-size-7 has-text-weight-bold " + getTypeClassname(type) } key={ key } >{  type }</p>
            )) : ''}
          </footer>

        </div>
      </div>
    ) : (
      <NoPokemon />
    );
  }
}

export default Pokemon;