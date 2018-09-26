import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPokedex, incrementLimit } from '../../store/actions/pokedexAction';

import Pokemon from "../../components/Pokemon";

const styles = {
    container: {
        marginBottom: '40px'
    },
    button:{
        marginTop: '20px'
    }
};

class Pokedex extends Component {

    constructor(props) {
        super(props);
        
        this.state = { 
            limit: 16
         };

        this.loadMore = this.loadMore.bind(this);
    } 

    componentWillMount() {
        this.props.fetchPokedex();
    }

    loadMore() {
        this.props.incrementLimit();
        this.scrollToBottom();
    }

    scrollToBottom () {
        setTimeout(() => {
            window.scroll(0, this.refs.pokeScroll.scrollHeight);
        }, 100);
    };

    // filterPokemons(pokemons){
    //     const { selectedType, name, selectedWeakness, selectedAbilities, limit } = this.props;
    //     return pokemons.filter(pokemon => {
    //         return pokemon.name.toLowerCase().indexOf(name.toLowerCase()) >= 0 
    //             && ( selectedType ? pokemon.type.some(type => type === selectedType) : true )
    //             && ( (selectedWeakness && pokemon.weakness !== undefined) ? pokemon.weakness.some(weakness => weakness === selectedWeakness) : true )
    //             && ( selectedAbilities ? pokemon.abilities.some(abilities => abilities === selectedAbilities) : true );
    //       })
    //       .slice(0, limit);
    // }

    render() { 
        const { pokemons, selectedType, selectedWeakness, selectedAbilities } = this.props;
        const filteredPokedex = pokemons.map(pokemon => <Pokemon pokemon={ pokemon } key={ pokemon.id } />);

        return ( 
            <div className="container" style={styles.container} ref="pokeScroll">
                <div className="columns is-multiline">
                    { filteredPokedex.length > 0 ? filteredPokedex :  ( selectedType || selectedWeakness ||  selectedAbilities ? this.props.tryAgain : this.props.renderLoading) }
                </div>

                <div className={"columns is-centered " + (filteredPokedex.length < this.state.limit ? "is-invisible" : "")} style={styles.button} > 
                    <a className="button has-text-centered" onClick={this.loadMore}>Load More</a>
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
    limit: 16,
};

const mapStateToProps = state => ({
    pokemons: state.pokedex.pokemons,
    name: state.pokedex.name,
    selectedType: state.pokedex.selectedType? state.pokedex.selectedType : false,
    selectedWeakness: state.pokedex.selectedWeakness ? state.pokedex.selectedWeakness : false,
    selectedAbilities: state.pokedex.selectedAbilities ? state.pokedex.selectedAbilities : false,
    limit: state.pokedex.limit,
});

export default connect(mapStateToProps, { fetchPokedex , incrementLimit })(Pokedex);