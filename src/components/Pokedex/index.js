import React from "react";
import Pokemon from "../Pokemon";
import FirebaseService from "../../services/firebase.service";

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

    // set inital states
    this.state = {
      pokedex: [],
      name: '',
      selectedType: '',
      weakness: [],
      abilities: [],
      types: [],
      loading: false
    };

    // binding
    this.handleChange = this.handleChange.bind(this);
    this.fetch = this.fetch.bind(this);

    // deps injection
    this._FirebaseService = new FirebaseService();
  }

  async fetch() {
    this.setState({ loading: true });

    // if exist localstorage
    if (localStorage.getItem("pokedex") !== null) {
      const pokedex = JSON.parse(localStorage.getItem("pokedex"));
      
      return this.setState({
        pokedex: pokedex,
        weakness: this.getListFromArrKey(pokedex, 'weakness'),
        abilities: this.getListFromArrKey(pokedex, 'abilities'),
        types : this.getListFromArrKey(pokedex, 'type'),
        loading: false
      });
    }

    try {
      const pokedex = await this._FirebaseService.getAll("pokedex");

      this.setState({ 
        pokedex, 
        weakness: this.getListFromArrKey(pokedex, 'weakness'),
        abilities: this.getListFromArrKey(pokedex, 'abilities'),
        types : this.getListFromArrKey(pokedex, 'type'),
        loading: false 
      });

      localStorage.setItem("pokedex", JSON.stringify( pokedex ));
    } catch (err) {
        console.log(`Error: ${err.message}`);
    }
  }

  componentDidMount() {
    this.fetch();
  }

  handleChange(event) {
    const state = event.target.type === "text" ?  "name": "selectedType";
    this.setState({ [state] : event.target.value});
  }

  getListFromArrKey(arr, prop){
    return arr.map(pokemon => pokemon[prop]) // set all props
      .reduce((a, b) => Array.isArray(b) ? a.concat(b): [], []) // flat all props
      .filter((type, pos, arr) => arr.indexOf(type) === pos) // remove duplicates
      .sort((last, next) => last > next ? 1 : -1); // alphabetical order
  }

  render() {
    const { pokedex, name, selectedType, loading, types } = this.state;

    const selectedTypeOptions = types.map(type => ( <option value={ type } key={ type }>{ type }</option> ));

    const filteredPokedex = pokedex
      .filter(pokemon => {
        return pokemon.name.toLowerCase().indexOf(name.toLowerCase()) >= 0 && ( selectedType ? pokemon.type.some(type => type === selectedType) : true );
      })
      .map(pokemon => {
        return ( 
          <Pokemon pokemon={ pokemon } key={ pokemon.id } />
        ) 
      });

    return (
      <div>
        <div className="container" style={ styles }>
          <div className="columns"> 
            <div className="field column is-8">
              <div className="control is-large has-icons-right">
                <input className="input is-large" type="text" placeholder="Enter pokemon name" value={ name } onChange={ this.handleChange } />
                <span className="icon is-medium is-right">
                  <i className="fas fa-search"></i>
                </span>
              </div>
            </div>

            <div className="field column is-4">
              <div className="control is-expanded">
                <div className="select is-large is-fullwidth">
                  <select value={ selectedType } onChange={ this.handleChange } className="is-capitalized">
                    <option value="">{ selectedType === "" ? "Select Type" : "-- Reset Filter" }</option>
                    { selectedTypeOptions }
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="columns is-multiline">
            { filteredPokedex.length > 0 ? filteredPokedex :  !loading ? this.props.tryAgain(name) : this.props.renderLoading }
          </div>
        </div>
      </div>
    );
  }
}

export default Pokedex;
