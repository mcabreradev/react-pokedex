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
      pokedex: [],
      name: '',
      selectedType: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this._FirebaseService = new FirebaseService();
  }

  fetch() {
    
    if (localStorage.getItem("pokedex") !== null) {
      return this.setState({
        pokedex: JSON.parse(localStorage.getItem("pokedex"))
      });
    }

    this._FirebaseService.getAll("pokedex")
      .then(pokedex => {
        this.setState({ pokedex });
        localStorage.setItem("pokedex", JSON.stringify( pokedex ));
      })
      .catch(err => console.error(`Error: ${err.message}`));
  }

  componentDidMount() {
    this.fetch();
  }

  handleChange(event) {
    const state = event.target.type === "text" ?  "name": "selectedType";
    this.setState({ [state] : event.target.value});
  }

  render() {
    const { pokedex, name, selectedType } = this.state;
    
    const selectedTypeOptions = pokedex
      .map(pokemon => pokemon.type) // set all pokemon types
      .reduce((a, b) => a.concat(b), []) // flat all pokemon types
      .filter((type, pos, arr) => arr.indexOf(type) === pos) // remove duplicates
      .sort((last, next) => last > next ? 1 : -1) // alphabetical order
      .map(type => {
        return (
          <option value={ type } key={ type }>{ type }</option> 
        );
      });

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

        <div className="columns is-multiline">
           { filteredPokedex.length > 0 ? filteredPokedex :  <div className="column"><b>{ name }</b> was not found!, try another name</div> }
        </div>
      </div>
    );
  }
}

export default Pokedex;
