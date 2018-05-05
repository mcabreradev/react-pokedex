import React from "react";
import Pokemon from "../Pokemon";
import FirebaseService from "../../services/firebase.service";

// redux
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPokedex } from '../../actions/pokedexActions';

const styles = {
  marginTop: "20px"
};

class Pokedex extends React.Component {

  static defaultProps = {
    renderLoading: <div>loading...</div>, 
    tryAgain: ((name) => (<div className="column"><b>{ name }</b> was not found!, try another name</div>)), 
  };

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      selectedType: '',
      loading: false
    };

    // binding
    this.onChange = this.onChange.bind(this);

    // dep injection
    this._FirebaseService = new FirebaseService();
  }

  componentWillMount() {
    this.props.fetchPokedex();
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { pokedex, types } = this.props; 
    const { name, selectedType } = this.state;
  
    const filteredPokedex = pokedex
      .filter(pokemon => {
        return pokemon.name.toLowerCase().indexOf(name.toLowerCase()) >= 0 && ( selectedType ? pokemon.type.some(type => type === selectedType) : true );
      })
      .map(pokemon => (<Pokemon pokemon={ pokemon } key={ pokemon.id } />));

    return (
      <div>
        <div className="container" style={ styles }>
          <div className="columns"> 
            <div className="field column is-8">
              <div className="control is-large has-icons-right">
                <input className="input is-large" type="text" placeholder="Enter pokemon name" name="name" value={ name } onChange={ this.onChange } />
                <span className="icon is-medium is-right">
                  <i className="fas fa-search"></i>
                </span>
              </div>
            </div>

            <div className="field column is-4">
              <div className="control is-expanded">
                <div className="select is-large is-fullwidth">
                  <select name="selectedType" value={ selectedType } onChange={ this.onChange } className="is-capitalized">
                    <option value="">{ selectedType === "" ? "Select Type" : "-- Reset Filter" }</option>
                    { types.map(type => ( <option value={ type } key={ type }>{ type }</option> )) }
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="columns is-multiline">
            { filteredPokedex.length > 0 ? filteredPokedex :  this.props.renderLoading }
          </div>
        </div>
      </div>
    );
  }
}

const  getListFromArrKey = (arr, prop) => {
  return arr.map(pokemon => pokemon[prop]) // set all props
    .reduce((a, b) => Array.isArray(b) ? a.concat(b): [], []) // flat all props
    .filter((type, pos, arr) => arr.indexOf(type) === pos) // remove duplicates
    .sort((last, next) => last > next ? 1 : -1); // alphabetical order
  }

Pokedex.propTypes = {
  fetchPokedex: PropTypes.func.isRequired,
  pokedex: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  pokedex: state.pokedex.pokedex,
  weakness: getListFromArrKey(state.pokedex.pokedex, 'weakness'),
  abilities: getListFromArrKey(state.pokedex.pokedex, 'abilities'),
  types : getListFromArrKey(state.pokedex.pokedex, 'type'),
});

export default connect(mapStateToProps, { fetchPokedex })(Pokedex);