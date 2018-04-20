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
      error: null
    };
  }

  componentDidMount() {
    this.fetchPokemon();
  }

  fetchPokemon() {
    // if exist localstorage
    if(localStorage.getItem("pokemon." + this.props.pokemon.name) !== null){
      return this.setState({ pokemon: JSON.parse(localStorage.getItem("pokemon." + this.props.pokemon.name)) });
    }

    fetch(this.props.pokemon.url)
      .then(response => {
        return response.json();
      })
      .then(pokemon => {
        localStorage.setItem("pokemon." + this.props.pokemon.name, JSON.stringify(pokemon) );
        this.setState({ pokemon });
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  getTypeClassname (name){
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

  render() {
    const { pokemon, error } = this.state;

    if (error) {
      return <div>{ error.message }</div>;
    }
    
    const { name, weight, height, sprites, order, types } = pokemon;



    return pokemon ? (
      <div className="column is-3">
        <div className="card has-background-white-bis" style={ styles }>
          <header className="card-header">
            <img src={ sprites ? sprites.front_default : name } alt={ name } />
            <p className="card-header-title is-capitalized is-size-6">{ name }</p>
          </header>

          <div className="card-content">
            <div className="content is-size-7 has-text-grey-dark">
              <p>Order: { order }</p>   
              <p>Height: { height }</p>   
              <p>Weight: { weight }</p>   
            </div>
          </div>

          <footer className="card-footer">
            { types ? types.map(type => (
              <p className={ "card-footer-item is-size-7 has-text-weight-bold " + this.getTypeClassname(type.type.name) } key={type.type.name} >{  type.type.name }</p>
            )) : 'nop'}
          </footer>

        </div>
      </div>
    ) : (
      <NoPokemon />
    );
  }
}

export default Pokemon;
