import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPokedex } from '../../store/actions/pokedexAction';

import Pokemon from "../../components/Pokemon";

class Pokedex extends Component {

    constructor(props) {
        super(props);
        this.state = {  };
    }

    componentWillMount() {
        this.props.fetchPokedex();
      }

    render() { 
        const { pokemons, name, selectedType } = this.props;

        const filteredPokedex = pokemons.filter(pokemon => {
          return pokemon.name.toLowerCase().indexOf(name.toLowerCase()) >= 0 && ( selectedType ? pokemon.type.some(type => type === selectedType) : true );
        })
        .map(pokemon => <Pokemon pokemon={ pokemon } key={ pokemon.id } />);

        return ( 
            <div className="container">
                <div className="columns is-multiline">
               
                { filteredPokedex.length > 0 ? filteredPokedex :  this.props.renderLoading }

                </div>
            </div>
         );
    }
}

Pokedex.defaultProps = {  
    renderLoading: <div>loading...</div>, 
    tryAgain: ((name) => (<div className="column"><b>{ name }</b> was not found!, try another name</div>)), 
};

const mapStateToProps = state => ({
    pokemons: state.pokedex.pokemons,
    name: state.pokedex.name,
    selectedType: state.pokedex.selectedType,
});

export default connect(mapStateToProps, { fetchPokedex })(Pokedex);