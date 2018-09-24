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
        const { pokemons, name, selectedType, selectedWeakness, selectedAbilities } = this.props;

        const filteredPokedex = pokemons.filter(pokemon => {
          return pokemon.name.toLowerCase().indexOf(name.toLowerCase()) >= 0 
            && ( selectedType ? pokemon.type.some(type => type === selectedType) : true )
            && ( (selectedWeakness && pokemon.weakness !== undefined) ? pokemon.weakness.some(weakness => weakness === selectedWeakness) : true )
            && ( selectedAbilities ? pokemon.abilities.some(abilities => abilities === selectedAbilities) : true );
        })
        .map(pokemon => <Pokemon pokemon={ pokemon } key={ pokemon.id } />);

        return ( 
            <div className="container">
                <div className="columns is-multiline">
                    { filteredPokedex.length > 0 ? filteredPokedex :  ( selectedType || selectedWeakness ||  selectedAbilities ? this.props.tryAgain : this.props.renderLoading) }
                </div>
            </div>
         );
    }
}

Pokedex.defaultProps = {  
    renderLoading: <div className="container">loading...</div>, 
    tryAgain: <div className="container">Pokemon was not found!, try again</div>, 
    pokemons: [],
    name: "",
    selectedType: "",
    selectedWeakness: "",
    selectedAbilities: "",
};

const mapStateToProps = state => ({
    pokemons: state.pokedex.pokemons,
    name: state.pokedex.name,
    selectedType: state.pokedex.selectedType? state.pokedex.selectedType : false,
    selectedWeakness: state.pokedex.selectedWeakness ? state.pokedex.selectedWeakness : false,
    selectedAbilities: state.pokedex.selectedAbilities ? state.pokedex.selectedAbilities : false,
});

export default connect(mapStateToProps, { fetchPokedex })(Pokedex);